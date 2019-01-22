import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import selectionReducer from './selection_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  ui: uiReducer,
  selection: selectionReducer,
});

export default rootReducer;
