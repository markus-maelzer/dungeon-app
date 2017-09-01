import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

export const SearchBar = (props) => (
  <div className='search_bar'>
    <FontAwesome name='search' />
    <input
      onChange={(e) => props.searchData(e.target.value)}
    />
    <select onChange={(e) => props.changeSearchBy(e.target.value)}>
    {
      props.dataProps.map((item, i) => {
        if(item.search('_') !== -1) {
          return ( <option key={i} value={item}>{item.replace('_',' ')}</option> );
        } else if (item === 'id' || item === 'toggleEdit' || item === 'toggleDetails') {
          return null;
        } else {
          return ( <option key={i} value={item}>{item}</option> );
        }
      })
    }
    </select>
  </div>
)

const searchData = (text) => (
  {
    type: 'SEARCH_DATA',
    text: text,
  }
)
const changeSearchBy = (text) => (
  {
    type: 'CHANGE_SEARCH_BY',
    text: text,
  }
)

const mapToStateSearchBarContainer = (state) => (
  {
    dataProps: state.dataReducer.dataProps,
  }
)

const mapToPropsSearchBarContainer = (dispatch) => (
  {
    searchData: (text) => (
      dispatch(searchData(text))
    ),
    changeSearchBy: (text) => (
      dispatch(changeSearchBy(text))
    )
  }
)

export const SearchBarContainer = connect(
  mapToStateSearchBarContainer,
  mapToPropsSearchBarContainer
)(SearchBar)
