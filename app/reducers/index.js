import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import clickCounter from './clickCounter';

const rootReducer = combineReducers({
  clickCounter,
  routing
});

export default rootReducer;
