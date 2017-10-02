import * as firebase from 'firebase';

export const initAuth = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    console.log('logging in');
    loggingIn
  })
}

const loggingIn = () => {
  return dispatch => {
    return dispatch({
      type: 'LOGGING_IN',
    })
  }
}
