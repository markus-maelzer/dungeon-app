

export const getSpecifiedSectionInDB = (path) => (
  database.ref(`/${path}`).once('value')
)

/* für später zum menüpunkte adden
export const addSection = (name) => {
  let key = database.ref('/').push().key
  let model = sectionModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/'+ key).set(model)
}
*/

export const addDataItem = (data, path) => {
  return new Promise((resolve, reject) => {
    database.ref(`/${path}`).once
  })
}
