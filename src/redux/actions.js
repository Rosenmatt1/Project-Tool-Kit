import { GET_CATEGORIES } from './actionTypes.js';

export const getCategories = (data) => ({
  type: GET_CATEGORIES,
  payload: { data }
});