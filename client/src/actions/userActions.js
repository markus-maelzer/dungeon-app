import axios from 'axios';

/*
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
*/
export const getServerData = (filepath) => {
  return dispatch =>  {
    return dispatch({
      type: 'GET_SERVER_DATA',
      payload: {
        promise: new Promise((resolve, rejected) => {
          axios.get('api/dungeon')
            .then(response => {
              resolve(response.data);
            })
            .catch(error => {
              rejected(error.data)
            })
        }),
      }
    })
  }
}



/*
promise: new Promise((resolve, rejected) => {
  fetch('api/dungeon', {
    header: {
      Accept: 'application/json',
    },
  }).then(response => {
    if (!response.ok) {
      throw new Error(response);
    }
    resolve(response.json());
  }).catch(error => {
    rejected(error);
  })
}),


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error('HTTP Error: ' + response.statusText);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json()
}
*/
