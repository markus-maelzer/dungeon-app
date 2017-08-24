


export const postFilepath = (path) => dispatch => fetch('api/filepath', {
  method: 'post',
  body: JSON.stringify({
    filePath: path
  }),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}).then(checkStatus)

export const getServerData = (success) => dispatch => fetch('api/dungeon', {
  header: {
    Accept: 'application/json',
  },
}).then(checkStatus)




cosnt checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    dispatch({type: 'POST_FULFILLED', payload: response})
    return response;
  } else {
    const error = new Error('HTTP Error: ' + response.statusText);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    dispatch({type: 'POST_REJECTED', payload: error});
    throw error;
  }
}
