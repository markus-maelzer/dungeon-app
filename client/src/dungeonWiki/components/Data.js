import React, { Component } from 'react';
import { DataDetails } from './DataDetails';

export const Data = (props) =>  (
  <div className='data_list_container'>
    {
      props.list.map((item, i) => (
        <div className='monster' key={i}>
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
                case 'challenge':
                case 'leben': {
                  return (
                    <p key={i}>{prop}: {item[prop]}</p>
                  );
                }
                default: {
                  return null;
                }
              }
            })
          }
        </div>
      ))
    }
  </div>
)
