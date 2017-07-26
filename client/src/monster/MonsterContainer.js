import React, { Component } from 'react';
import { MonsterList } from './components/MonsterList';
import { ToggleCreateMonsterForm } from './components/ToggleCreateMonsterForm';

class MonsterContainer extends Component {
  state = {
    monsterList: [
      {
        id: 1,
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
        id: 2,
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

  handleEditFormSubmit = (monster) => {
    this.updateMonsterList(monster);
  }

  handleCreateFormSubmit = (monster) => {
    this.createMonster(monster);
  }

  createMonster = (monster) => {
      console.log(monster);
    this.setState({
      monsterList: this.state.monsterList.concat(monster.data),
    })
  }

  updateMonsterList = (monster) => {
    console.log(monster.data);
    this.setState({
      monsterList: this.state.monsterList.map((monsterData) => {
        if (monster.data.id === monsterData.id) {
          return Object.assign({}, monsterData, {
            id: monster.data.id,
            name: monster.data.name,
            größe: monster.data.größe,
            beschreibung: monster.data.beschreibung,
            waffen: monster.data.waffen,
            besonderheiten: monster.data.besonderheiten,
            dungeon_floor: monster.data.dungeon_floor,
            challenge: monster.data.challenge,
            leben: monster.data.leben,
            zäheit: monster.data.zäheit,
            resistenzen: monster.data.resistenzen,
            schwäche: monster.data.schwäche,
            immunitäten: monster.data.immunitäten,
            rüstung: monster.data.rüstung,
            skills: monster.data.skills,
            movement_speed: monster.data.movement_speed,
            dmg: monster.data.dmg,
            trefferrate: monster.data.trefferrate,
          });
        } else {
          return monsterData;
        }
      }),
    });
  }



  render() {
    return (
      <div className="monster-container">
        <MonsterList
          monsterList={this.state.monsterList}
          onFormSubmit={this.handleEditFormSubmit}
         />
        <ToggleCreateMonsterForm
          onFormSubmit={this.handleCreateFormSubmit}
        />
      </div>
    );
  }
}

export default MonsterContainer;
