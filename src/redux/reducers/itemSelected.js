//Still need to add this to rest of REDUX. Not wired up yet...

export default (state = null, action) => {
  switch (action.type) {
    case 'ITEM_SELECTED':
      return action.payload
    default:
      return state;
  }
}