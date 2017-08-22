// import modules
import { combineReducers } from 'redux';

export const reducer = combineReducers({

});


const state = {
  activeMenuItem: 'monster',
  dataArrays: [
    {
      title: 'monster',
      dataList: [
        {
          data: {},
          toggleDetails: false,
          toggleEdit: false,
        }
      ],
      filterList: [],
    },
    {
      title: ''
    }
  ],

}
