import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to the cart
    addToCart: (state, action) => {
      const existingItem = state.find(item => item.sno === action.payload.sno);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    // Increment item count
    incrementItem: (state, action) => {
      const item = state.find(item => item.sno === action.payload);
      if (item) {
        item.count += 1;
      }
    },
    // Decrement item count
    decrementItem: (state, action) => {
      const item = state.find(item => item.sno === action.payload);
      if (item) {
        item.count -= 1;
        if (item.count === 0) {
          return state.filter(item => item.sno !== action.payload);
        }
      }
    },
    // Remove item from the cart
    removeFromCart: (state, action) => {
      return state.filter(item => item.sno !== action.payload);
    },
  },
});

export const { addToCart, incrementItem, decrementItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;