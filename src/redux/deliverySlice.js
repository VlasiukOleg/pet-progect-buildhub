import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'delivery',
  initialState: {
    deliveryType: 'pickup',
    deliveryPrice: 0,
  },
  reducers: {
    setDeliveryType(state, action) {
      state.deliveryType = action.payload;
    },
    setDeliveryPrice(state, action) {
      state.deliveryPrice = action.payload;
    },
  },
});

export const { setDeliveryType, setDeliveryPrice } = deliverySlice.actions;
export const deliveryReducer = deliverySlice.reducer;
