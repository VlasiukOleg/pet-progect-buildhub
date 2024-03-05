import { createSlice } from '@reduxjs/toolkit';

const movingSlice = createSlice({
  name: 'moving',
  initialState: {
    movingPrice: 0,
  },
  reducers: {
    setMovingCost(state, action) {
      state.movingPrice = action.payload;
    },
  },
});

export const { setMovingCost } = movingSlice.actions;
export const movingReducer = movingSlice.reducer;
