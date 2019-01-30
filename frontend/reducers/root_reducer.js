import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import selectionReducer from './selection_reducer';
import filtersReducer from './filters_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  filters: filtersReducer,
  selection: selectionReducer,
  ui: uiReducer,
});

export default rootReducer;
