import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/darkMode/darkMode';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
