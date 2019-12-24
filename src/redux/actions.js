import { GET_CATEGORIES, ENTER_SITE, TAB_SELECTED, GET_PRODUCTS, LOGGED_IN, OPEN_LOGIN, USER_ID, USERNAME } from './actionTypes.js';

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

export const loggedIn = ( logged ) => ({
  type: LOGGED_IN,
  payload: logged
});

export const openLogIn = ( val )  => ({
  type: OPEN_LOGIN,
  payload: val
});

export const userID = ( id ) => ({
  type: USER_ID,
  payload: id
});

export const username = (username) => ({
  type: USERNAME,
  payload: username
});