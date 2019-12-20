// import { OPEN_LOGIN } from '../actionTypes.js';

export default (state = false, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return action.payload
    default:
      return state;
  }
}