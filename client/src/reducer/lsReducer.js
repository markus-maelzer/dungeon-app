
const initialLsReducerState = {
  isLoggedIn: false,
  toggleLS: false,
  userName: '',
  permission: 'player',
  fetchStatus: fetchUserStatus(undefined, {}),
  validateLogin: null,
  errorMessage: '',
}

export function lsReducer(state = initialLsReducerState, action) {
  switch (action.type) {
    case 'USER': {
      return state;
    }
    case 'VALIDATE': {
      return state;
    }
    default: {
      return state;
    }

  }
}


function fetchUserStatus(state = {
  fetching: false,
  fetched: false,
  error: null
}, action) {

}
