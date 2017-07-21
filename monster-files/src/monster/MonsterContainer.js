import React, { Component } from 'react';
import { MonsterList } from './components/MonsterList';
import { ToggleCreateMonsterForm } from './components/ToggleCreateMonsterForm';

class MonsterContainer extends Component {
  state = {
    monsterList: [
      {
        name: 'Goblin',
        größe: '20cm',
        beschreibung:'asdf' ,
        waffen: 'nix' ,
        besonderheiten:'nix' ,
        dungeon_floor:'nix' ,
        challenge:'nix' ,
        leben: '50',
        zäheit:'nix' ,
        resistenzen:'nix' ,
        schwäche: 'nix',
        immunitäten: 'nix',
        rüstung:'nix' ,
        skills:'nix' ,
        movement_speed: 'nix',
        dmg: 'nix',
        trefferrate: 'nix',
      },
      {
        name: 'Ork',
        größe: '20cm',
        beschreibung:'asdf' ,
        waffen: 'nix' ,
        besonderheiten:'nix' ,
        dungeon_floor:'nix' ,
        challenge:'nix' ,
        leben: '150',
        zäheit:'nix' ,
        resistenzen:'nix' ,
        schwäche: 'nix',
        immunitäten: 'nix',
        rüstung:'nix' ,
        skills:'nix' ,
        movement_speed: 'nix',
        dmg: 'nix',
        trefferrate: 'nix',
      },
    ]
  }
  render() {
    return (
      <div className="monster-container">
        <MonsterList monsterList={this.state.monsterList} />
        <ToggleCreateMonsterForm />
      </div>
    );
  }
}

export default MonsterContainer;
