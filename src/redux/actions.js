import { GET_CATEGORIES, ENTER_SITE } from './actionTypes.js';

export const getCategories = ( data ) => ({
  type: GET_CATEGORIES,
  payload: { data }
});

export const enterSite = ( entered ) => ({
  type: ENTER_SITE,
  payload: entered
});