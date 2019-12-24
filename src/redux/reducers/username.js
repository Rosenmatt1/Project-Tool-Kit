
export default (state = "", action) => {
  console.log("username reducer fired")
  switch (action.type) {
    case 'USERNAME':
      return action.payload
    default:
      return state;
  }
}