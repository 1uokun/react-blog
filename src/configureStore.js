import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers/index'

const loggerMiddleware = createLogger();
const persistConfig = {
    key: 'root',
    storage,
    blacklist:[]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


export default function configureStore(preloadedState) {
    const store = createStore(
        persistedReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    const persistor = persistStore(store);
    return {store,persistor}
}