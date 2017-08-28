import axios from 'axios';

export const getServerData = filepath => {
  return dispatch =>  {
    return dispatch({
      type: 'GET_SERVER_DATA',
      payload: {
        promise: new Promise((resolve, rejected) => {
          axios.post('api/filepath', {
            filepath: filepath
          })
          .then(response => {
            axios.get('api/dungeon')
            .then(response => {
              resolve(response.data)
            })
            .catch(error => {
              rejected(error.data);
            })
          })
          .catch(error => {
            rejected(error.data);
          });
        }),
      }
    })
  }
}
