
export default (state = false, action) => {
  switch (action.type) {
    case 'SHOWLOADER':
      return action.payload
    default:
      return state;
  }
}