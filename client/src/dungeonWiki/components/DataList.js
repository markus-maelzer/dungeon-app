import { connect } from 'react-redux';
import { Data } from './Data';
import { toggleDetails, toggleEdit } from '../actions/wikiActions';

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
    cToggleDetails: (id) => (
      dispatch(toggleDetails(id))
    ),
    cToggleEdit: (id) => (
      dispatch(toggleEdit(id))
    )
  }
)

export const DataList = connect(
  mapToStateDataList,
  mapToPropsDataList
)(Data)
