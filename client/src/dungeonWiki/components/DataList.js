import { connect } from 'react-redux';
import { Data } from './Data';
import { toggleDetails, toggleEdit } from '../actions/wikiActions';
import { deleteData } from '../actions/userActions';

const mapToStateDataList = (state) => {
  const list = state.dataReducer.filterData.map(item => {
    let object = {};

    Object.getOwnPropertyNames(item).forEach(prop => {
      object[prop] = item[prop];
    })
    return object;
  })

  return {
    list,
    filepath: state.navReducer.filepath,
  };
}

const mapToPropsDataList = (dispatch) => (
  {
    cToggleDetails: (id) => (
      dispatch(toggleDetails(id))
    ),
    cToggleEdit: (id) => (
      dispatch(toggleEdit(id))
    ),
    deleteData: (id, path) => (
      dispatch(deleteData(id, path))
    )
  }
)

export const DataList = connect(
  mapToStateDataList,
  mapToPropsDataList
)(Data)
