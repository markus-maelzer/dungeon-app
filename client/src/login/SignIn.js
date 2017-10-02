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
export class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }
  componentDidMount() {
    console.log(this.props.firebase);
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
    this.props.firebase.createUser(
    {email, password},
    {username: 'markus', email}
  )
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
            Sign In
          </button>
          <div>

            <button onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      )
    }
  }
}
