import React, { Component } from 'react';
import { MonsterDetails } from './MonsterDetails';

export class Monster extends Component  {
  state = {
    toggleDetails: false,
  }

  handleToggleDetails = () => {
    if (!this.state.toggleDetails) {
      this.setState({
        toggleDetails: true,
      });
    } else {
      this.setState({
        toggleDetails: false,
      });
    }
  }

  render()  {
    if(!this.state.toggleDetails) {
      return (
        <div className="monster" onClick={this.handleToggleDetails}>
          <h2> { this.props.name } </h2>
          <p>DF: { this.props.dungeon_floor } </p>
          <p>Challenge: { this.props.challenge } </p>
          <p>Leben: { this.props.leben } </p>
        </div>
      );
    } else {
      return (
        <MonsterDetails
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

          größe={this.props.größe}
          beschreibung={this.props.beschreibung}
          besonderheiten={this.props.besonderheiten}

          skills={this.props.skills}
          movement_speed={this.props.movement_speed}
          dmg={this.props.dmg}
          trefferrate={this.props.trefferrate}

          handleToggleDetails={this.handleToggleDetails}
          onFormSubmit={this.props.onFormSubmit}
        />
      );
    }
  }
}
