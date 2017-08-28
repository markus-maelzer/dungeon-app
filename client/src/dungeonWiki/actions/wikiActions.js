
// toggles the create Button
export const toggleCreate = () => (
  {
    type: 'TOGGLE_CREATE'
  }
)

// toggle data details
export const toggleDetails = (id) => (
  {
    type: 'TOGGLE_DETAILS',
    id: id,
  }
)

// toggle edit data
export const toggleEdit = (id) => (
  {
    type: 'TOGGLE_EDIT',
    id: id,
  }
)
