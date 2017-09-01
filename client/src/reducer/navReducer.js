const initialNavReducerState = {
  toggleNav: true,
  filepath: 'monster',
}

export function navReducer(state = initialNavReducerState, action) {
  switch (action.type) {
    case 'CLICK_LINK': {
      var filepath = checkFilepath(state, action);
      if (filepath === state.filepath) {
        return {
          ...state,
          toggleNav: !state.toggleNav,
          filepath: filepath,
        }
      } else {
        return {
          ...state,
          toggleNav: !state.toggleNav,
          filepath: filepath,
        }
      }
    }
    default: {
      return state;
    }

  }
}

function checkFilepath(state, action) {
  switch (action.filepath) {
    case 'toggle' :
    case 'home' : {
      return state.filepath;
    }
    default : {
      return action.filepath;
    }
  }
}
