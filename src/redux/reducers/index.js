
import { combineReducers } from 'redux';
import categories from './categories';
import enterSite from './enterSite';
import tabSelected from './tabSelected'

export default combineReducers({ categories, enterSite, tabSelected })