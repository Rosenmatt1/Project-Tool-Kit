
import { combineReducers } from 'redux';
import categories from './categories';
import enterSite from './enterSite';
import tabSelected from './tabSelected';
import products from './products';
import loggedIn from './loggedIn';
import openLogIn from './openLogIn'

export default combineReducers({ categories, enterSite, tabSelected, products, loggedIn, openLogIn })