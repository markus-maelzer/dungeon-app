import React, { Component } from 'react';
import { SearchBar } from './SearchBar';

export class SortMonsters extends Component {
  render() {
    return (
      <div className="sort_bar">
        <SearchBar
          searchForMonster={this.props.searchForMonster}
          initialItems={this.props.initialItems}
        />
      </div>
    );
  }
}
