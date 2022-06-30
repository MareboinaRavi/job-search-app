import { createStore } from "redux";

import userReducer from "./reducer";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
// import {PersistGate} from 'redux-persist/integration/react';
const persistConfig = {
    key:"root",
    storage,
    varsion:1
}
const persistedReducer = persistReducer(persistConfig,userReducer)
const store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store)

export default store;
