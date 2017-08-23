import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
const uuidv1 = require('uuid/v1');

export class CreateDataForm extends Component {

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
    skill_multiplikator: this.props.skill_multiplikator || '',
    movement_speed: this.props.movement_speed || '',
    dmg_multiplikator: this.props.dmg_multiplikator || '',
    trefferrate: this.props.trefferrate || '',

  }

  static defaultProps = {
    categorys: [
      'name', 'dungeon_floor', 'challenge', 'leben',
      'waffen', 'rüstung', 'zäheit', 'schwäche', 'resistenzen',
      'immunitäten', 'größe', 'beschreibung', 'besonderheiten',
      'skills', 'skill_multiplikator', 'movement_speed', 'dmg_multiplikator', 'trefferrate'
    ]
  }

  handleInputChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
  }

  handleSubmit = () => {
    // check if submit has id
    // if not create a new uuid
    let id = this.props.id || '';
    if (id === '') {
      id = uuidv1();
    }

    // save form data in the variable formData
    let formData = {
      id: id,
    };
    let categorys = this.props.categorys;
    for (let i = 0; i < categorys.length; i++) {
      formData[categorys[i]] = this.state[categorys[i]];
    }

    // pass formData as a parameter to onFormSubmit
    this.props.onFormSubmit({
      data: formData
    })
  }

  render() {
    const inputs = this.props.categorys.map((category, i) => {
      return (
        <div key={i} className='category'>
          <h3>{category}</h3>
          <input type='text' value={this.state[category]}
            onChange={this.handleInputChange(category)}
          />
        </div>
      );
    });

    const buttonText = this.props.id ? 'Update' : 'Create';
    const className = this.props.className || 'updateMonster';
    return(
      <div className={"monster monster-details form " + className}>
        {inputs}

        <button
          type='submit'
          onClick={this.handleSubmit}
        >
          {buttonText}
        </button>
        <div className="details_toolbar">
          <FontAwesome
            onClick={this.props.className === 'create_monster' ? this.props.handleToggleCreateMonster : this.props.handleToggleEdit}
            name='times-circle'
          />
        </div>
      </div>
    );
  }
}
