import React, { Component } from 'react';
import { SearchBar } from './SearchBar';

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
    const toggleNav = this.state.toggleNav ?
      <div className='toggle_nav_button' onClick={this.handleToggleNav}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      :
      <div className='nav'>
        <ul>
        </ul>
      </div>
      ;
    return (
      <div className={this.state.toggleNav ? "sort_bar" : "sort_bar_extended"} >
        {toggleNav}
        <SearchBar
          searchForMonster={this.props.searchForMonster}
          initialItems={this.props.initialItems}
        />
      </div>
    );
  }
}
