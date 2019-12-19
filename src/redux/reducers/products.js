// import { GET_PRODUCTS } from '../actionTypes.js';

const initialState = {
  products: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload
    default:
      return state;
  }
}