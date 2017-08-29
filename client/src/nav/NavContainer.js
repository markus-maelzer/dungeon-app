import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { SearchBarContainer } from './SearchBar';
import FontAwesome from 'react-fontawesome';

const NavBar = (props) => (
  <div className={props.toggleNav ? "sort_bar" : "sort_bar_extended"} >
    {
      props.toggleNav ? (
      <div>
        <div className='toggle_nav_button' onClick={() => props.toggleNavBar('toggle')}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <SearchBarContainer
          /*searchForMonster={this.props.searchForMonster}
          initialItems={this.props.initialItems}*/
        />
      </div>
      ) : (
        <div className='nav'>
          <ul>
            <li><NavLink to='/'><span onClick={() => props.toggleNavBar('home')}>Home</span></NavLink></li>
            <li><NavLink to='/monster'><span onClick={() => props.toggleNavBar('monster')}>Monster</span></NavLink></li>
            <li><NavLink to='/items'><span onClick={() => props.toggleNavBar('items')}>Items</span></NavLink></li>
          </ul>
          <FontAwesome className='close_nav' onClick={() => props.toggleNavBar('home')} name='times-circle' />
        </div>
      )
    }
  </div>
)


const mapToStateNavContainer = (state) => (
  {
    toggleNav: state.navReducer.toggleNav,
  }
)

function toggle(filepath) {
  return {
    type: 'CLICK_LINK',
    filepath: filepath,
  }
}

const mapToPropsNavContainer = (dispatch) => (
  {
    toggleNavBar: (filepath) => (
      dispatch(toggle(filepath))
    ),
  }
)

export const NavContainer = connect(
  mapToStateNavContainer,
  mapToPropsNavContainer
)(NavBar);
