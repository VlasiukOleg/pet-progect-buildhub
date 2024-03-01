import { configureStore } from '@reduxjs/toolkit';
import { materialsReducer } from './materialsSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
  },
});
