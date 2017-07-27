import React, { Component } from 'react';
import { Monster } from './Monster';

export class MonsterList extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }


  handleMonsterOpen = (e) => {
    console.log(e.target);
  }

  render() {
    const monsterList = this.props.monsterList.map((monster, i) => {
      return (
        <Monster
          id={monster.id}
          key={i}
          name={monster.name}
          dungeon_floor={monster.dungeon_floor}
          challenge={monster.challenge}
          leben={monster.leben}

          waffen={monster.waffen}
          rüstung={monster.rüstung}

          zäheit={monster.zäheit}
          schwäche={monster.schwäche}
          resistenzen={monster.resistenzen}
          immunitäten={monster.immunitäten}

          größe={monster.größe}
          beschreibung={monster.beschreibung}
          besonderheiten={monster.besonderheiten}

          skills={monster.skills}
          skill_multiplikator={monster.skill_multiplikator}
          movement_speed={monster.movement_speed}
          dmg_multiplikator={monster.dmg_multiplikator}
          trefferrate={monster.trefferrate}


          onFormSubmit={this.props.onFormSubmit}
        />
      )
    });

    return (
      <div className='monster-list-container'>
        {monsterList}
      </div>
    );
  }
}
