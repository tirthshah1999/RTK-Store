import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    //Inside reducers all are pure fns: Doesn't change outer data.

    addToCart(state, action) {
      // return [...state, action.payload] redux way but in rtk
      // can directly mutate as createSlice internally do redux way only
      state.push(action.payload);
    },

    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
