import * as firebase from 'firebase';
import React, { Component } from 'react';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  handleOnChange = (data) => (e) => {
    this.setState({
      [data]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if(this.state.username === '' || this.state.password === '') {
      console.log('error with');
    } else {
      this.submitLogin(this.state.username, this.state.password)
    }
  }

  submitLogin = (mail, password) => {
    firebase.auth().signInWithEmailAndPassword(mail, password).catch(error => {
      //handle error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('code: ' + errorCode, 'message: ' + errorMessage);
    })
    console.log('hi');
  }

  render() {
    if(this.props.isLoggedIn) {
      return (
        <div>
          hi
        </div>
      );
    } else {
      return (
        <div className='login'>
          <h3>Username:</h3>
          <input value={this.state.username} type="email" onChange={this.handleOnChange('username')} />

          <h3>Password</h3>
          <input value={this.state.password} type="password" onChange={this.handleOnChange('password')} />

          <button type='submit' onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      )
    }
  }
}
