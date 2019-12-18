
import { ENTER_SITE } from '../actionTypes.js';

export default (state = false, action) => {
  console.log("enter site called")
  switch (action.type) {
    case 'ENTER_SITE':
      return action.payload
    default:
      return state;
  }
}