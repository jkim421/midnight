import { combineReducers } from 'redux';
import loadingReducer from './loading_reducer';
import headerUiReducer from './header_ui_reducer';

const uiReducer = combineReducers({
  loading: loadingReducer,
  header: headerUiReducer,
});

export default uiReducer;
