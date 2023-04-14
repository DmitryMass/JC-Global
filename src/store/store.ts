import { persistSliceReducer } from './slices/persistSlice';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { setupListeners } from '@reduxjs/toolkit/query';
import { newsApi } from './api/newsApi';
import { goalsApi } from './api/goalsApi';
import { authApi } from './api/auth';
import { employeesApi } from './api/employeesApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const reducers = combineReducers({
  persistSlice: persistReducer(persistConfig, persistSliceReducer),
  [newsApi.reducerPath]: newsApi.reducer,
  [goalsApi.reducerPath]: goalsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [employeesApi.reducerPath]: employeesApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      newsApi.middleware,
      goalsApi.middleware,
      authApi.middleware,
      employeesApi.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
export type TypeRootState = ReturnType<typeof store.getState>;
