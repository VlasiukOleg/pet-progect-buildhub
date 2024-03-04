import { configureStore } from '@reduxjs/toolkit';
import { materialsReducer } from './materialsSlice';
import { deliveryReducer } from './deliverySlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    delivery: deliveryReducer,
  },
});
