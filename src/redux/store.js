import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";

const middlewares = []
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}

const persistConfig = {
    key:'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlewares))
export default store
export const persistor = persistStore(store)

