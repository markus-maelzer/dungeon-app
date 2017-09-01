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
      
    }
    this.props.submitLogin(this.state.username, this.state.password)
  }

  render() {
    return (
      <div className='login'>
        <h3>Username:</h3>
        <input value={this.state.username} onChange={this.handleOnChange('username')} />

        <h3>Password</h3>
        <input value={this.state.password} onChange={this.handleOnChange('password')} />

        <button type='submit' onClick={this.handleSubmit}>
          Login
        </button>
      </div>
    )
  }

}
