import { createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import Reactotron from '@config/reactotron-config'

import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import sagas from '@store/sagas';
import reducers from '@store/slices';

const sagaMonitor = Reactotron.createSagaMonitor!();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const Store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer!()))

const Persistor = persistStore(Store);
sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof Store.getState>

export { Persistor };

export default Store;
