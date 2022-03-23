

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from "./reducers";

const rootPersistConfig = {
    key: 'root',
    storage: storage,
};
const store = configureStore({ reducer: persistReducer(rootPersistConfig, rootReducer), middleware: getDefaultMiddleware({ serializableCheck: false }) });
const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export { store, persistor };


