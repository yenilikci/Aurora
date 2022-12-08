import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { darkModeReducer } from './slices/darkMode/darkMode';
import { filesReducer } from './slices/files/files';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const combinedReducers = combineReducers({
  darkMode: darkModeReducer,
  files: filesReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default persistedReducer;
