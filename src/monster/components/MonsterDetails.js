import React, { Component } from 'react';
import { CreateMonsterForm } from './CreateMonsterForm';

export class MonsterDetails extends Component {
  state = {
    toggleEdit: false,
  }
  render() {
    if(!this.state.toggleEdit) {
      return(
        <div className="monster_details">
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
          <p>Movement_speed: { this.props.movement_speed } </p>
          <p>Dmg: { this.props.dmg } </p>
          <p>Trefferrate: { this.props.trefferrate } </p>
        </div>
      );
    } else {
      return (
        <CreateMonsterForm
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
          movement_speed={this.props.movement_speed}
          dmg={this.props.dmg}
          trefferrate={this.props.trefferrate}
        />
      );
    }
  }
}
