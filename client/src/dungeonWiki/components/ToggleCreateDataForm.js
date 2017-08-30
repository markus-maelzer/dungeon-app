import React, { Component } from 'react';
import { CreateDataFormContainer } from './CreateDataForm';
import { AddButton } from './AddButton';

export class ToggleCreateDataForm extends Component {
  render() {
    const item = {};
    if(this.props.itemData.length > 0) {
      this.props.itemData.forEach(prop => {
        switch (prop) {
          case 'toggleDetails':
          case 'toggleEdit': {
            return item[prop] = false;
          }
          default : {
            return item[prop] = '';
          }
        }
      })
    }
    if (this.props.toggleCreate) {
      return <CreateDataFormContainer
        className='create_monster'
        itemData={item}
      />
    } else {
      return <AddButton
        cToggleCreate={this.props.cToggleCreate}
      />
    }
  }
}
