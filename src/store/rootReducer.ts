import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/darkMode/darkMode';

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
});

export default combinedReducers;
