import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducer from './reducer';
import { initialState } from '../modules/AppState';

/*
const enhancers = [
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // eslint-disable-next-line no-undef
      predicate: () => __DEV__,
    }),
  ),
];


/* eslint-disable no-undef 
const composeEnhancers =
  (__DEV__ &&
    typeof window !== 'undefined' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  composeWithDevTools;
eslint-enable no-undef */

const enhancerComposer = composeWithDevTools({
  realtime: true,
  name: 'Resume as a Service - Redux',
  hostname: 'localhost',
  port: 8000,
  suppressConnectErrors: false,
});

const enhancer = enhancerComposer(
  applyMiddleware(
    thunkMiddleware,
    createLogger({
      collapsed: true,
      // eslint-disable-next-line no-undef
      predicate: () => __DEV__,
    }),
  ),
);

const persistConfig = {
  key: 'root-v3',
  storage: AsyncStorage,
  version: 3,
  migrate: createMigrate({ 3: state => initialState }),
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
