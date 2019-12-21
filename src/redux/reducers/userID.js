
export default (state = null, action) => {
  switch (action.type) {
    case 'USER_ID':
      return action.payload
    default:
      return state;
  }
}