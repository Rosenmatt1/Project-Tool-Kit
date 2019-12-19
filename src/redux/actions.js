import { GET_CATEGORIES, ENTER_SITE, TAB_SELECTED, GET_PRODUCTS } from './actionTypes.js';

export const getCategories = ( data ) => ({
  type: GET_CATEGORIES,
  payload: data
});

export const getProducts = ( data ) => ({
  type: GET_PRODUCTS,
  payload: data
});

export const enterSite = ( entered ) => ({
  type: ENTER_SITE,
  payload: entered
});

export const tabSelected = ( tab ) => ({
  type: TAB_SELECTED,
  payload: tab
});