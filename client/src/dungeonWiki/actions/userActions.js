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


export const createData = (data, path) => {
  return dispatch =>  {
    return dispatch({
      type: 'CREATE_DATA',
      payload: {
        promise: new Promise((resolve, rejected) => {
          axios.post('api/dungeon', {
            data: data,
            filepath: path,
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            rejected(error)
          })
        })
      }
    })
  }
}

export const updateData = (data, path) => {
  return dispatch =>  {
    return dispatch({
      type: 'UPDATE_DATA',
      payload: {
        promise: new Promise((resolve, rejected) => {
          axios.put('api/dungeon', {
            data: data,
            filepath: path,
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            rejected(error)
          })
        })
      }
    })
  }
}
