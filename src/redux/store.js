import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore,persistReducer,createTransform} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";
import {parse, stringify} from 'flatted/esm';
import createSagaMiddleware from 'redux-saga'

import {addListingStart, onAddListingStart, onFetchListingsStart} from "./listing/listing.saga";
import rootSaga from "./rootSaga";

console.log('middleware',createSagaMiddleware)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]
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
    transforms: [transformCircular],
    blacklist:['listings']
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlewares))
sagaMiddleware.run(rootSaga)
export default store
export const persistor = persistStore(store)

