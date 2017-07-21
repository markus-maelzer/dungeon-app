import React, { Component } from 'react';
import { CreateMonsterForm } from './CreateMonsterForm';
import { AddButton } from './AddButton';

export class ToggleCreateMonsterForm extends Component {
  state = {
    isOpen: false,
  }
  render() {
    if (this.state.isOpen) {
      return <CreateMonsterForm />
    } else {
      return <AddButton />;
    }
  }
}
