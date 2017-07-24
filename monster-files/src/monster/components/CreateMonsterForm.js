import React, { Component } from 'react';

export class CreateMonsterForm extends Component {

  state = {
    name: this.props.name || '',
    dungeon_floor: this.props.dungeon_floor || '',
    challenge: this.props.challenge || '',
    leben: this.props.leben || '',
    waffen: this.props.waffen || '',
    rüstung: this.props.rüstung || '',
    zäheit: this.props.zäheit || '',
    schwäche: this.props.schwäche || '',
    resistenzen: this.props.resistenzen || '',
    immunitäten: this.props.immunitäten || '',
    größe: this.props.größe || '',
    beschreibung: this.props.beschreibung || '',
    besonderheiten: this.props.besonderheiten || '',
    skills: this.props.skills || '',
    movement_speed: this.props.movement_speed || '',
    dmg: this.props.dmg || '',
    trefferrate: this.props.trefferrate || '',
  }

  handleInputChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
    console.log(data);
  }
  render() {
    const categorys = [
      'name', 'dungeon_floor', 'challenge', 'leben',
      'waffen', 'rüstung', 'zäheit', 'schwäche', 'resistenzen',
      'immunitäten', 'größe', 'beschreibung', 'besonderheiten',
      'skills', 'movement_speed', 'dmg', 'trefferrate'
    ];
    const inputs = categorys.map((category, i) => {
      return (
        <div key={i}>
          <h3>{category}</h3>
          <input type='text' value={this.state[category]}
            onChange={this.handleInputChange(category)}
          />
        </div>
      );
    })
    return(
      <div>
          {inputs}
      </div>
    );
  }
}
