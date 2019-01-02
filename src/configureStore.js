import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireReducer from 'redux-persist-expire'
import rootReducer from './reducers/index'

const loggerMiddleware = createLogger();
const expireTransform = expireReducer('life',{
    persistedAtKey:'loadedAt',
    expireSeconds: 86400,//设置token时效为1天
    autoExpire:false
});
//指定数据设置过期时间
const persistConfig = {
    key: 'root',
    storage,
    blacklist:[],
    transforms:[expireTransform]
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