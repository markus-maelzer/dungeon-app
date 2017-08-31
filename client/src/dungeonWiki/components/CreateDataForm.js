import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import uuidv1 from 'uuid/v1';
import { connect } from 'react-redux';

import { ButtonLoader } from './ButtonLoader';

import { toggleCreate, toggleEdit } from '../actions/wikiActions';
import { createData, updateData } from '../actions/userActions';

export class CreateDataForm extends Component {

  state = this.props.itemData;

  handleInputChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
  }

  handleSubmit = () => {
    // save form data in the variable formData
    let formData = {};
    let categorys = Object.getOwnPropertyNames(this.props.itemData);
    for (let i = 0; i < categorys.length; i++) {
      if(categorys[i] === 'id' && this.state[categorys[i]] === "") {
        formData[categorys[i]] = uuidv1();
      } else {
        formData[categorys[i]] = this.state[categorys[i]];
      }
    }

    // pass formData as a parameter to onFormSubmit
    if(this.props.className === 'create_monster') {
      this.props.createData(formData, this.props.filepath);
    } else {
      this.props.updateData(formData, this.props.filepath);
    }

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

    const buttonText = item.id ? 'Update' : 'Create';
    const className = this.props.className || 'updateMonster';

    return(
      <div className={"monster monster-details form " + className}>
        {inputs}

        <ButtonLoader
          type='submit'
          onClick={this.handleSubmit}
          toggle={this.props.toggleButtonLoader}
          text={buttonText}
        />

        <div className="details_toolbar">
          <FontAwesome
            onClick={
              this.props.className === 'create_monster' ?
              this.props.cToggleCreate
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

const mapStateToDataFormContainer = (state) => (
  {
    filepath: state.navReducer.filepath,
    toggleButtonLoader: state.dataReducer.toggleButtonLoader,
  }
);

const mapPropsToDataFormContainer = (dispatch) => (
  {
    cToggleCreate: () => (
      dispatch(toggleCreate())
    ),
    cToggleEdit: (id) => (
      dispatch(toggleEdit(id))
    ),
    createData: (data, path) => (
      dispatch(createData(data, path))
    ),
    updateData: (data, path) => (
      dispatch(updateData(data, path))
    )
  }
);

export const CreateDataFormContainer = connect(
 mapStateToDataFormContainer,
 mapPropsToDataFormContainer
)(CreateDataForm)
