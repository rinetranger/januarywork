import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import createAsyncEncryptor from 'redux-persist-transform-encrypt/async';
import { persistReducer, persistStore } from 'redux-persist';
import rootSaga from './sagas';
import { 
    newsReducer,
    INewsReducer
} from './reducers'

export interface AppState {
    news: INewsReducer,
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const shouldPurge = false;

const asyncEncryptor = createAsyncEncryptor({
    secretKey: 'testest',
});

const rootPersistConfig = {
    key: 'root',
    storage,
    whitelist: [],
    transform: [asyncEncryptor],
};

const rootReducer = combineReducers<AppState>({
    news: newsReducer
});

// @ts-ignore
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
let middleware: any = [sagaMiddleware, thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const logger = createLogger({ diff: true, collapsed: true });
if (process.env.NODE_ENV !== 'production') middleware.push(logger);


const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

if (shouldPurge) persistor.purge();

export default store