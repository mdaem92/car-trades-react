import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore,persistReducer,createTransform} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";
import {parse, stringify} from 'flatted/esm';

const middlewares = []
if(process.env.NODE_ENV==='development'){
    middlewares.push(logger)
}
export const transformCircular = createTransform(
    (inboundState, key) => stringify(inboundState),
    (outboundState, key) => parse(outboundState),
)

const persistConfig = {
    key:'root',
    storage,
    transforms: [transformCircular]
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlewares))
export default store
export const persistor = persistStore(store)

