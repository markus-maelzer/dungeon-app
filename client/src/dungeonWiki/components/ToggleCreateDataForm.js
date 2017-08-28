import React, { Component } from 'react';
import { CreateDataFormContainer } from './CreateDataForm';
import { AddButton } from './AddButton';

export class ToggleCreateDataForm extends Component {
  render() {
    const item = {};
    if(this.props.itemData.length > 0) {
      Object.getOwnPropertyNames(this.props.itemData[1]).forEach(prop => {
        switch (prop) {
          case 'toggleDetails':
          case 'toggleEdit': {
            item[prop] = false;
          }
          default : {
            item[prop] = '';
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
