

function getData(success) {
  return fetch('api/dungeon', {
    header: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function changeFilePath(path) {
  console.log(path);
  return fetch('api/filepath' , {
    method: 'post',
    body: JSON.stringify({
      filePath: path
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function createData(data, path) {
  return fetch('/api/dungeon', {
    method: 'post',
    body: JSON.stringify({
      data: data,
      filePath: path
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function updateData(data, path) {
  return fetch('/api/dungeon', {
    method: 'put',
    body: JSON.stringify({
      data: data,
      filePath: path
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function deleteData(data, path) {
  return fetch('/api/dungeon', {
    method: 'delete',
    body: JSON.stringify({
      data: data,
      filePath: path
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}


function checkStatus(response) {
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


const Client = { getData, createData, updateData, changeFilePath }
export default Client;
