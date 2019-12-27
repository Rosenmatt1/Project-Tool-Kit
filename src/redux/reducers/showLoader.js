
export default (state = true, action) => {
  switch (action.type) {
    case 'SHOWLOADER':
      return action.payload
    default:
      return state;
  }
}