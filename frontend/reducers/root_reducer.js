import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import selectionReducer from './selection_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  selection: selectionReducer,
});

export default rootReducer;
