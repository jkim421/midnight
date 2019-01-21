import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import filtersReducer from './filters_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  filters: filtersReducer,
});

export default rootReducer;
