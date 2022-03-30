import { createSlice } from "@reduxjs/toolkit";

// files

const initialState = {
  orderNumber: 0,
};

export const name = "orders";

const ordersSlice = createSlice({
  name,
  initialState,
  reducers: {
    nextOrderNumber(state, action) {
      state.orderNumber = action.payload;
    },
  },
});

export const { nextOrderNumber } = ordersSlice.actions;

export default ordersSlice.reducer;
