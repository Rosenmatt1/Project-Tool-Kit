// import { TAB_SELECTED } from '../actionTypes.js';

export default (state = 0, action) => {
  switch (action.type) {
    case 'TAB_SELECTED':
      return action.payload
    default:
      return state;
  }
}