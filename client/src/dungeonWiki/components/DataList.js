//import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Data } from './Data';

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

const mapToStateDataList = (state) => {
  const list = state.dataReducer.data.map(item => {
    let object = {};
    Object.getOwnPropertyNames(item).forEach(prop => {
      object[prop] = item[prop];
    })
    return object;
  })

  return {
    list,
  };
}


const mapToPropsDataList = (dispatch) => (
  {
    toggleDetails: (curBool) => (
      dispatch(toggleDetails(curBool))
    ),
    toggleEdit: (curBool) => (
      dispatch(toggleEdit(curBool))
    )
  }
)


export const DataList = connect(
  mapToStateDataList,
  mapToPropsDataList
)(Data)
