import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './features/patient/patientSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, patientReducer);

const store = configureStore({
  reducer: {
    patient: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
