import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';

@firebaseConnect()
@connect(
  ({ firebase }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile')
  })
)
export class Login extends Component {
  state = {
    username: '',
    password: '',
  }
  handleLogout = (e) => {
    e.preventDefault();
    this.props.firebase.logout()
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

  submitLogin = (email, password) => {
    console.log(password, email);
    this.props.firebase.login({
      email: email,
      password: password
    })
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
          <div>
            {this.props.firebase.profile}
            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      )
    }
  }
}
