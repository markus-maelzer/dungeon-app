import React, { Component } from 'react';
import { CreateDataForm } from './CreateDataForm';
import { AddButton } from './AddButton';

export class ToggleCreateDataForm extends Component {
  handleToggleCreateMonster = () => {
    this.toggleOpen();
  }

  handleCreateMonsterSubmit = (monster) => {
    this.props.onFormSubmit(monster);
    this.toggleOpen();
  }


  render() {
    if (this.props.toggleCreate) {
      return <CreateDataForm
        className='create_monster'
      />
    } else {
      return <AddButton
        cToggleCreate={this.props.cToggleCreate}
      />
    }
  }
}
