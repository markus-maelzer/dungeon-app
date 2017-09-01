import React from 'react';
import { connect } from 'react-redux';

export const Loader = ({fetching}) => {
  <div className={'main_loader ' + fetching ? 'slideIn' : 'slideOut'}>
    <div className='loader'></div>
  </div>
}

const mapToStateMainLoader = (state) => (
  {
    fetching: state.dataReducer.fetchStatus.fetching,
  }
)

const mapToPropsMainLoader = (dispatch) => (
  {

  }
)

export const MainLoader = connect(
  mapToStateMainLoader,
  mapToPropsMainLoader
)(Loader);
