// import { LOGGED_IN } from '../actionTypes.js';


export default (state = false, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.payload
    default:
      return state;
  }
}