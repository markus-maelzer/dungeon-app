import React, { Component } from 'react';

export class AddButton extends Component {
  render() {
    return (
      <button className="add_monster" onClick={this.handleToggleCreateMonster} >Add Monster</button>
    );
  }
}
