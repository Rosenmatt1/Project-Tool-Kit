
import { GET_CATEGORIES } from '../actionTypes.js';

const initialState = {
  categories: null
};

export default (state = false, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      console.log('GET_CATEGORIES reducer fired')
      return action.payload
    default:
      return state;
  }
}