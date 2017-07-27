import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export class SearchBar extends Component {
  state = {
    filter: this.props.filter || 'name',
  }

  filterList = (e) =>{
    var updatedList = this.props.initialItems;
    var filter = this.state.filter;

    updatedList = updatedList.filter(function(item){
      return item[filter].toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });

    //console.log(updatedList);

    this.props.searchForMonster(updatedList)
  }

  render() {
    return (
      <div className='search_bar'>
        <FontAwesome name='search' />
        <input
          onChange={this.filterList}
        />
      </div>
    )
  }
}
