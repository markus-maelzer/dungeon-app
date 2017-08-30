import React from 'react';

export const ButtonLoader = (props) => {
  if(props.toggle) {
    return (
      <div className='loader_container'>
        <div className='loader'></div>
      </div>
    )
  } else {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }
}
