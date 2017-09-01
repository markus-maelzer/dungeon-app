import React from 'react';
import { DataDetails } from './DataDetails';

export const Data = (props) =>  (
  <div className='data_list_container'>
    {
      props.list.map((item, i) => {
        if(!item.toggleDetails) {
          return (
            <div
              className='monster'
              key={i}
              onClick={() => props.cToggleDetails(item.id)}>
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
          );
        } else {
          return <DataDetails
            key={i}
            keyProp={i}
            itemData={item}
            filepath={props.filepath}
            cToggleDetails={props.cToggleDetails}
            cToggleEdit={props.cToggleEdit}
            deleteData={props.deleteData}
          />;
        }

      })
    }
  </div>
)
