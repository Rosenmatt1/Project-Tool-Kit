// import { ERROR_400 } from '../actionTypes.js';

export default (state = false, action) => {
  switch (action.type) {
    case 'ERROR_400':
      return action.payload
    default:
      return state;
  }
}