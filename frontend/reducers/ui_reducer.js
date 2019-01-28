import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';

const uiReducer = combineReducers({
  categories: categoriesReducer,
});

export default uiReducer;
