import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
        <SearchBar
          /*searchForMonster={this.props.searchForMonster}
          initialItems={this.props.initialItems}*/
        />
      </div>
      ) : (
        <div className='nav'>
          <ul>
            <li onClick={() => props.toggleNavBar('home')}><NavLink to='/' ><span>Home</span></NavLink></li>
            <li onClick={() => props.toggleNavBar('monster')}><NavLink to='/monster' ><span>Monster</span></NavLink></li>
          </ul>
        </div>
      )
    }
  </div>
)


const mapToStateNavContainer = (state) => (
  {
    toggleNav: state.dataReducer.toggleNav,
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
