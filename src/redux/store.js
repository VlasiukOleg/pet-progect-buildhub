import { configureStore } from '@reduxjs/toolkit';
import { materialsReducer } from './materialsSlice';
import { deliveryReducer } from './deliverySlice';
import { movingReducer } from './movingSlice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    delivery: deliveryReducer,
    moving: movingReducer,
  },
});
