import React, { Component } from 'react';
import { MonsterList } from './components/MonsterList';
import { ToggleCreateMonsterForm } from './components/ToggleCreateMonsterForm';
import { SortMonsters } from './components/SortMonsters';

import Client from '../Client';


class MonsterContainer extends Component {
  state = {
    monsterList: [],
    filteredMonsterList: []
  }

  componentDidMount() {
    this.loadMonsters();
  }
  shouldComponentUpdate(nextState) {
    console.log(this.state.monsterList);
    return true;
  }
  componentDidUpdate() {

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
      this.setState({
        monsterList: serverMonsterList,
        filteredMonsterList: serverMonsterList
      })
    })
  }

  createMonster = (monster) => {
    // set state of monsterList for react
    this.setState({
      monsterList: this.state.monsterList.concat(monster.data),
    })
    //send new monster to backend
    Client.createMonster(monster.data);
  }

  updateMonsterList = (monster) => {
    //var newMonsterList =
    // try to make map into a variable
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
            skill_multiplikator: monster.data.skill_multiplikator,
            movement_speed: monster.data.movement_speed,
            dmg_multiplikator: monster.data.dmg_multiplikator,
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


  // sort and Filter Functions
  searchForMonster = (data) => {
    this.setState({
      filteredMonsterList: data
    })
  }



  render() {
    return (
      <div className="monster-container">
        <MonsterList
          monsterList={this.state.filteredMonsterList}
          initialMonsterList={this.state.monsterList}
          onFormSubmit={this.handleEditFormSubmit}
         />
        <ToggleCreateMonsterForm
          onFormSubmit={this.handleCreateFormSubmit}
        />
        <SortMonsters
          searchForMonster={this.searchForMonster}
          initialItems={this.state.monsterList}
        />
      </div>
    );
  }
}

export default MonsterContainer;
