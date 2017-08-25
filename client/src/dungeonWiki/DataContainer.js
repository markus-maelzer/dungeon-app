import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { ReduxContainer } from './ReduxContainer';

import { getServerData } from '../actions/userActions';

import { NavContainer } from '../nav/NavContainer';
import { DataList } from './components/DataList';
import { ToggleCreateDataForm } from './components/ToggleCreateDataForm';


export class DataContainer extends Component {
  componentWillMount() {
    this.props.getServerData();
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);

  //  this.props.getServerData();
  }
  render() {
    return (
      <div className='data_container'>
        <DataList />
        <ToggleCreateDataForm />
        <NavContainer />
      </div>
    );
  }
}

const mapStateToReduxContainer = (state) => (
  {
    filepath: state.dataReducer.filepath,
  }
);

const mapDispatchToReduxContainer = (dispatch) => (
  {
    getServerData: () => {
      dispatch(getServerData());
    }
  }
);

export const ReduxContainer = connect(
  mapStateToReduxContainer,
  mapDispatchToReduxContainer
)(DataContainer);
