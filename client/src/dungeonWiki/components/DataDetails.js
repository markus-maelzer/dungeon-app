import React from 'react';
import { CreateDataFormContainer } from './CreateDataForm';
import FontAwesome from 'react-fontawesome';

export const DataDetails = (props) => {
  const item = props.itemData;
  if (!item.toggleEdit) {
    return (
      <div className='monster monster-details'>
        {
          Object.getOwnPropertyNames(item).map((prop, i) => {
            switch (prop) {
              case 'name': {
                return (
                  <h2 key={i}>{item[prop]}</h2>
                );
              }
              case 'dungeon_floor': {
                return (
                  <p key={i}>DF: {item[prop]}</p>
                );
              }
              case 'id':
              case 'toggleDetails':
              case 'toggleEdit': {
                return null;
              }
              default: {
                return (
                  <p key={i}>{prop}: {item[prop]}</p>
                );
              }
            }
          })
        }
        <div className="details_toolbar">
          <FontAwesome onClick={() => props.cToggleEdit(item.id)} name='pencil-square' />
          <FontAwesome onClick={() => props.cToggleDetails(item.id)} name='times-circle' />
          <FontAwesome name='trash' />
        </div>
      </div>
    );
  } else {
    return <CreateDataFormContainer
      key={props.keyProp}
      itemData={item}
      cToggleEdit={props.cToggleEdit} />
  }
}
