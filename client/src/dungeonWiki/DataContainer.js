import React, { Component } from 'react';
import { NavContainer } from '../nav/NavContainer';
import { connect } from 'react-redux'
//import { ReduxContainer } from './ReduxContainer';

export class DataContainer extends Component {
  componentWillMount() {
    this.props.dispatch()
  }
  render() {
    return (
      <div className='data_container'>
        <ReduxContainer filepath={this.props.filepath} />
        <NavContainer />
      </div>
    );
  }
}

const Container = (props) => (
  <div>
    <h1>Hallo</h1>
  </div>
);

function toggleDetails(toggle) {
  return {
    type: 'TOGGLE_DETAILS',
    toggle: toggle,
  }
}

function toggleEdit(toggle) {
  return {
    type: 'TOGGLE_EDIT',
    toggle: toggle,
  }
}

const mapStateToReduxContainer = (state) => (
  {
    filepath: state.dataReducer.filepath,
    data: state.dataReducer.data,
    filterData: state.dataReducer.filterData,
    toggleDetails: false,
    toggleEdit: false,
  }
);

const mapDispatchToReduxContainer = (dispatch) => (
  {
    onToggleDetails: (toggle) => (
      dispatch(toggleDetails(toggle))
    ),
    onToggleEdit: (toggle) => (
      dispatch(toggleEdit(toggle))
    )
  }
);

const ReduxContainer = connect(
  mapStateToReduxContainer,
  mapDispatchToReduxContainer
)(Container);
