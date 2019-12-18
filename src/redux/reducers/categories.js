
import { GET_CATEGORIES } from '../actionTypes.js';

const initialState = {
  categories: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload
    default:
      return state;
  }
}