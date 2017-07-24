import React, { Component } from 'react';
import { Monster } from './Monster';

export class MonsterList extends Component {

  handleMonsterOpen = (e) => {
    console.log(e.target);
  }

  render() {
    const monsterList = this.props.monsterList.map((monster, i) => {
      return (
        <Monster
          id={i}
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

          größe={monster.beschreibung}
          beschreibung={monster.beschreibung}
          besonderheiten={monster.besonderheiten}

          skills={monster.skills}
          movement_speed={monster.movement_speed}
          dmg={monster.dmg}
          trefferrate={monster.trefferrate}
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
