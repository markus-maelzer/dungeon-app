

function getMonsters(success) {
  return fetch('api/monster', {
    header: {
      Accept: 'application/json',
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(success);
}

function createMonster(data) {
  return fetch('/api/monster', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(checkStatus);
}

function updateMonster(data) {
  return fetch('/api/monster', {
    method: 'put',
    body: JSON.stringify(data),
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


const Client = { getMonsters, createMonster, updateMonster }
export default Client;
