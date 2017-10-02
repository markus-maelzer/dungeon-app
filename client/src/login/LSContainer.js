import { connect } from 'react-redux';
import { LSForm } from './LSForm';


const submitLogin = (username, password) => (
  {
    type: 'SUBMIT_LOGIN'
  }
)
const submitSignIn = (username, password, email) => (
  {
    type: 'SUBMIT_SIGN_IN'
  }
)

const mapToStateLSContainer = (state) => (
  {
    toggleLS: state.loginReducer.toggleLS,
  }
)

const mapToPropsLSContainer = (dispatch) => (
  {
    submitLogin: (username, password) => (
      dispatch(submitLogin(username, password))
    ),
    submitSignIn: (username, password, email) => (
      dispatch(submitSignIn(username, password))
    ),
  }
)

export const LSContainer = connect (
  mapToStateLSContainer,
  mapToPropsLSContainer
)(LSForm)
