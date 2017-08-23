import React, { Component } from 'react';
import { CreateDataForm } from './CreateDataForm';
import { AddButton } from './AddButton';

export class ToggleCreateDataForm extends Component {
  state = {
    isOpen: false,
  }

  handleToggleCreateMonster = () => {
    this.toggleOpen();
  }

  handleCreateMonsterSubmit = (monster) => {
    this.props.onFormSubmit(monster);
    this.toggleOpen();
  }

  toggleOpen = () => {
    if(!this.state.isOpen) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      })
    }
  }

  render() {
    if (this.state.isOpen) {
      return <CreateDataForm
        className='create_monster'
        handleToggleCreateMonster={this.handleToggleCreateMonster}
        onFormSubmit={this.handleCreateMonsterSubmit}
      />
    } else {
      return <AddButton
        handleToggleCreateMonster={this.handleToggleCreateMonster}
      />
    }
  }
}
