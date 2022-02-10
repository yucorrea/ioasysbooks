import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import sagas from './sagas';
import reducers from './slices';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(reducers, applyMiddleware(sagaMiddleware))

const Persistor = persistStore(Store);
sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof Store.getState>

export { Persistor };

export default Store;
