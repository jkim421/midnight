import { combineReducers } from 'redux';
import categoryReducer from './category_reducer';

const uiReducer = combineReducers({
  category: categoryReducer,
});

export default uiReducer;
