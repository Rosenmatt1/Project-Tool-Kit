
import { combineReducers } from 'redux';
import categories from './categories';
import enterSite from './enterSite';
import tabSelected from './tabSelected';
import products from './products';
import loggedIn from './loggedIn';

export default combineReducers({ categories, enterSite, tabSelected, products, loggedIn })