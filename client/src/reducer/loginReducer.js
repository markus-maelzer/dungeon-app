
const initialLsReducerState = {
  isLoggedIn: false,
  toggleLS: false,
  userName: '',
  permission: 'player',
  validateLogin: null,
  errorMessage: '',
}

export function loginReducer(state = initialLsReducerState, action) {
  switch (action.type) {
    case 'LOGGING_IN': {
      console.log('his');
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case 'LOGGING_OUT': {
      return {
        ...state,
        isLoggedIn: false,
      }
    }
    case 'VALIDATE': {
      return state;
    }
    default: {
      return state;
    }
  }
}
