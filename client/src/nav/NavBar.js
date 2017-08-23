import React, { Component } from 'react';
import { SearchBar } from './SearchBar';
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  state = {
    toggleNav: true,
  }
  handleToggleNav = () => {
    if (!this.state.toggleNav) {
      this.setState({
        toggleNav: true,
      });
    } else {
      this.setState({
        toggleNav: false,
      });
    }
  }

  render() {
    if (this.state.toggleNav) {
      return (
        <div className={this.state.toggleNav ? "sort_bar" : "sort_bar_extended"} >
          <div className='toggle_nav_button' onClick={this.handleToggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <SearchBar
            searchForMonster={this.props.searchForMonster}
            initialItems={this.props.initialItems}
          />
        </div>
      );
    } else {
      return (
        <div className={this.state.toggleNav ? "sort_bar" : "sort_bar_extended"} >
          <div className='nav'>
            <ul>
              <li><NavLink to='/' onClick={this.handleToggleNav}><span>Home</span></NavLink></li>
              <li><NavLink to='/monster' onClick={this.handleToggleNav}><span>Monster</span></NavLink></li>
            </ul>
          </div>
        </div>
      );
    }
  }
}
