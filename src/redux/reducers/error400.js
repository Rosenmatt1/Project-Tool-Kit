// import { ERROR_400 } from '../actionTypes.js';

export default (state = false, action) => {
  console.log("error 400 reducer fired")
  switch (action.type) {
    case 'ERROR_400':
      return action.payload
    default:
      return state;
  }
}