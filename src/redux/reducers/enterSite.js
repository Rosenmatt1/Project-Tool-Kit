
// import { ENTER_SITE } from '../actionTypes.js';

export default (state = false, action) => {
  switch (action.type) {
    case 'ENTER_SITE':
      return action.payload
    default:
      return state;
  }
}