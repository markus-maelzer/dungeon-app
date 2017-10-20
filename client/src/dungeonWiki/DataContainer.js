import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { ReduxContainer } from './ReduxContainer';

import { getServerData } from './actions/userActions';
import { toggleCreate } from './actions/wikiActions';

import { NavContainer } from '../nav/NavContainer';
import { DataList } from './components/DataList';
import { ToggleCreateDataForm } from './components/ToggleCreateDataForm';

import {firebaseConnect} from 'react-redux-firebase';

@firebaseConnect(['monster'])
@connect(
  ({firebase: {data: {monster}} }) => ({
    monster
  })
)

export class DataContainer extends Component {
  componentWillMount() {
    this.props.getServerData(this.props.filepath);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.filepath !== this.props.filepath) {
      this.props.getServerData(nextProps.filepath);
    }
  }
  componentDidMount() {
    console.dir(this.props);
  }

  render() {
    return (
      <div className='data_container'>
        <DataList />
        <ToggleCreateDataForm
          itemData={this.props.dataProps}
          cToggleCreate={this.props.cToggleCreate}
          toggleCreate={this.props.toggleCreate}
        />
        <NavContainer />
      </div>
    );
  }
}

const mapStateToReduxContainer = (state) => (
  {
    filepath: state.navReducer.filepath,
    dataProps: state.dataReducer.dataProps,
    toggleCreate: state.dataReducer.toggleCreate,
  }
);

const mapDispatchToReduxContainer = (dispatch) => (
  {
    getServerData: (filepath) => (
      dispatch(getServerData(filepath))
    ),
    cToggleCreate: () => (
      dispatch(toggleCreate())
    )
  }
);

export const ReduxContainer = connect(
  mapStateToReduxContainer,
  mapDispatchToReduxContainer
)(DataContainer);
