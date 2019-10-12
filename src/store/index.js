import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
