import React, { Component } from 'react';
import { MonsterList } from './components/MonsterList';
import { ToggleCreateMonsterForm } from './components/ToggleCreateMonsterForm';
import Client from '../Client';

class MonsterContainer extends Component {
  state = {
    monsterList: []
  }

  componentDidMount() {
    this.loadMonsters();
  }

  handleEditFormSubmit = (monster) => {
    this.updateMonsterList(monster);
  }

  handleCreateFormSubmit = (monster) => {
    this.createMonster(monster);
  }

  // load Monsters from Data
  loadMonsters = () => {
    Client.getMonsters((serverMonsterList) => {
      this.setState({ monsterList: serverMonsterList })
    })
  }

  // create monster
  createMonster = (monster) => {
    // set state of monsterList for react
    this.setState({
      monsterList: this.state.monsterList.concat(monster.data),
    })
    //send new monster to backend
    Client.createMonster(monster.data);
  }

  updateMonsterList = (monster) => {
    this.setState({
      monsterList: this.state.monsterList.map((monsterData) => {
        //check if id exists and then update the monster with the same id
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
        // else just return the same monster data the loop was outputing
        } else {
          return monsterData;
        }
      }),
    });
    // send updated monster to backend
    Client.updateMonster(monster.data);
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
