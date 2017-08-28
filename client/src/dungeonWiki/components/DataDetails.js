import React from 'react';
import { CreateDataForm } from './CreateDataForm';
import FontAwesome from 'react-fontawesome';
/*
export class DataDetailss extends Component {
  state = {
    toggleEdit: false,
  }

  handleOnClick = () => {

  }

  handleToggleEdit = () => {
    this.toggleEdit();
  }

  handleEditMonsterSubmit = (monster) => {
    this.props.onFormSubmit(monster);
    this.toggleEdit();
  }

  toggleEdit = () => {
    if (!this.state.toggleEdit) {
      this.setState({
        toggleEdit: true,
      });
    } else {
      this.setState({
        toggleEdit: false,
      });
    }
  }

  render() {
    if(!this.state.toggleEdit) {
      return(
        <div className="monster monster-details">
          <h2> { this.props.name } </h2>
          <p>DF: { this.props.dungeon_floor } </p>
          <p>Challenge: { this.props.challenge } </p>
          <p>Leben: { this.props.leben } </p>
          <p>Waffen: { this.props.waffen } </p>
          <p>Rüstung: { this.props.rüstung } </p>
          <p>Zäheit: { this.props.zäheit } </p>
          <p>Schwäche: { this.props.schwäche } </p>
          <p>Resistenzen: { this.props.resistenzen } </p>
          <p>Immunitäten: { this.props.immunitäten } </p>
          <p>Größe: { this.props.größe } </p>
          <p>Beschreibung: { this.props.beschreibung } </p>
          <p>Besonderheiten: { this.props.besonderheiten } </p>
          <p>Skills: { this.props.skills } </p>
          <p>Skill Multiplikator: {this.props.skill_multiplikator}</p>
          <p>Movement Speed: { this.props.movement_speed } </p>
          <p>Dmg Multiplikator: { this.props.dmg_multiplikator } </p>
          <p>Trefferrate: { this.props.trefferrate } </p>

          <div className="details_toolbar">
            <FontAwesome onClick={this.handleToggleEdit} name='pencil-square' />
            <FontAwesome onClick={this.props.cToggleDetails} name='times-circle' />
            <FontAwesome onClick={this.props.cToggleDetails} name='trash' />
          </div>
        </div>
      );
    } else {
      return (
        <CreateDataForm
          id={this.props.id}
          name={this.props.name}
          dungeon_floor={this.props.dungeon_floor}
          challenge={this.props.challenge}
          leben={this.props.leben}

          waffen={this.props.waffen}
          rüstung={this.props.rüstung}

          zäheit={this.props.zäheit}
          schwäche={this.props.schwäche}
          resistenzen={this.props.resistenzen}
          immunitäten={this.props.immunitäten}

          größe={this.props.beschreibung}
          beschreibung={this.props.beschreibung}
          besonderheiten={this.props.besonderheiten}

          skills={this.props.skills}
          skill_multiplikator={this.props.skill_multiplikator}
          movement_speed={this.props.movement_speed}
          dmg_multiplikator={this.props.dmg_multiplikator}
          trefferrate={this.props.trefferrate}

          handleToggleEdit={this.handleToggleEdit}
          onFormSubmit={this.handleEditMonsterSubmit}
        />
      );
    }
  }
}
*/

export const DataDetails = (props) => {
  const item = props.itemData;
  if (!item.toggleEdit) {
    return (
      <div className='monster monster-details'>
        {
          Object.getOwnPropertyNames(item).map((prop, i) => {
            switch (prop) {
              case 'name': {
                return (
                  <h2 key={i}>{item[prop]}</h2>
                );
              }
              case 'dungeon_floor': {
                return (
                  <p key={i}>DF: {item[prop]}</p>
                );
              }
              case 'id':
              case 'toggleDetails':
              case 'toggleEdit': {
                return null;
              }
              default: {
                return (
                  <p key={i}>{prop}: {item[prop]}</p>
                );
              }
            }
          })
        }
        <div className="details_toolbar">
          <FontAwesome onClick={() => props.cToggleEdit(item.id)} name='pencil-square' />
          <FontAwesome onClick={() => props.cToggleDetails(item.id)} name='times-circle' />
          <FontAwesome  name='trash' />
        </div>
      </div>
    );
  } else {
    return <CreateDataForm
      key={props.keyProp}
      itemData={item}
      cToggleEdit={props.cToggleEdit} />
  }
}
