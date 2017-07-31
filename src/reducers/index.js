import { combineReducers } from 'redux';
import componentsReducer from './componentsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  components: componentsReducer,
  routing: routerReducer
});

export default rootReducer;
