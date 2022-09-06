export const bgColorReducer = (prevState = {
  bgcolor: 'rgba(0,0,0,0)'
},action) => {
  const newState = { ...prevState }
  if (action.type === 'change-bgcolor') {
    newState.bgcolor = action.payload
    return newState
  }
  return prevState
}
