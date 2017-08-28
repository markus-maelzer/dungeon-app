import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
const uuidv1 = require('uuid/v1');

export class CreateDataForm extends Component {

  state = this.props.itemData;

  handleInputChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
  }

  handleSubmit = () => {
    // check if submit has id
    // if not create a new uuid
    let id = this.props.id || '';
    if (id === '') {
      id = uuidv1();
    }

    // save form data in the variable formData
    let formData = {
      id: id,
    };
    let categorys = this.props.categorys;
    for (let i = 0; i < categorys.length; i++) {
      formData[categorys[i]] = this.state[categorys[i]];
    }

    // pass formData as a parameter to onFormSubmit
    this.props.onFormSubmit({
      data: formData
    })
  }

  render() {
    const item = this.props.itemData;
    const inputs = Object.getOwnPropertyNames(item).map((category, i) => {
      switch (category) {
        case 'id':
        case 'toggleDetails':
        case 'toggleEdit': {
          return null;
        }
        default: {
          return (
            <div key={i} className='category'>
              <h3>{category}</h3>
              <input type='text' value={this.state[category]}
                onChange={this.handleInputChange(category)}
              />
            </div>
          );
        }
      }
    });

    const buttonText = this.props.id ? 'Update' : 'Create';
    const className = this.props.className || 'updateMonster';
    return(
      <div className={"monster monster-details form " + className}>
        {inputs}

        <button
          type='submit'
          onClick={this.handleSubmit}
        >
          {buttonText}
        </button>
        <div className="details_toolbar">
          <FontAwesome
            onClick={
              this.props.className === 'create_monster' ?
              this.props.handleToggleCreateMonster
              :
              () => this.props.cToggleEdit(item.id)
            }
            name='times-circle'
          />
        </div>
      </div>
    );
  }
}
