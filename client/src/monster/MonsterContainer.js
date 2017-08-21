import React, { Component } from 'react';
import { MonsterList } from './components/MonsterList';
import { ToggleCreateMonsterForm } from './components/ToggleCreateMonsterForm';
import { NavBar } from '../nav/NavBar';


import Client from '../Client';


export class MonsterContainer extends Component {
  state = {
    monsterList: [],
    filteredMonsterList: []
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
    Client.changeFilePath('monster');
    Client.getData((serverMonsterList) => {
      this.setState({
        monsterList: serverMonsterList,
        filteredMonsterList: serverMonsterList
      })
    });
  }

  createMonster = (monster) => {
    // set state of monsterList for react
    this.setState({
      monsterList: this.state.monsterList.concat(monster.data),
      filteredMonsterList: this.state.monsterList.concat(monster.data),
    })
    //send new monster to backend
    Client.createData(monster.data, 'monster');
  }

  updateMonsterList = (monster) => {
    var newMonsterList = this.state.monsterList.map((monsterData) => {
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
    });
    console.log(newMonsterList);
    this.setState({
      monsterList: newMonsterList,
      filteredMonsterList: newMonsterList
    });
    // send updated monster to backend
    Client.updateData(monster.data, 'monster');
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
          onFormSubmit={this.handleEditFormSubmit}
         />
        <ToggleCreateMonsterForm
          onFormSubmit={this.handleCreateFormSubmit}
        />
        <NavBar
          searchForMonster={this.searchForMonster}
          initialItems={this.state.monsterList}
        />
      </div>
    );
  }
}
