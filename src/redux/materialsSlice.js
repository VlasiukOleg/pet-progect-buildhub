import { createSlice } from '@reduxjs/toolkit';
import products from '../products/products.json';

const materialsSlice = createSlice({
  name: 'materials',
  initialState: products,
  reducers: {
    toggleCategory(state, action) {
      state[action.payload].isCategoryOpen =
        !state[action.payload].isCategoryOpen;
    },
    changeQuantity(state, action) {
      console.log(action.payload);
      state[action.payload.catIndex].materials[
        action.payload.matIndex
      ].quantity =
        Number(
          state[action.payload.catIndex].materials[action.payload.matIndex]
            .quantity
        ) + action.payload.value;
    },
    inputChangeQuantity(state, action) {
      state[action.payload.catIndex].materials[
        action.payload.matIndex
      ].quantity = action.payload.value;
    },
    clearQuantity(state, action) {
      const groupMaterials = state.flatMap(material => material.materials);
      groupMaterials.map(item => (item.quantity = action.payload));
    },
  },
});

export const {
  toggleCategory,
  changeQuantity,
  inputChangeQuantity,
  clearQuantity,
} = materialsSlice.actions;
export const materialsReducer = materialsSlice.reducer;
