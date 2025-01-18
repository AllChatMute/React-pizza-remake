import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartPizzaType from "../../types/cartPizzaInterface";

interface initialState {
  cartItems: cartPizzaType[];
  totalPrice: number;
  totalCount: number;
}

const initialState: initialState = {
  cartItems: [],
  totalPrice: 0,
  totalCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleAddCartItem: (state, action: PayloadAction<cartPizzaType>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (foundedPizza) {
        foundedPizza.count++;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    handleDeleteCartItem: (state, action: PayloadAction<string>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== foundedPizza?.id
      );
    },
    handleIncreaseItemCount: (state, action) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (foundedPizza) foundedPizza.count++;
    },
    handleDecreaseItemCount: (state, action: PayloadAction<string>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (foundedPizza && foundedPizza.count > 1) {
        foundedPizza.count--;
      } else if (foundedPizza && foundedPizza.count <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== foundedPizza.id
        );
      }
    },
    handleClearCart: (state) => {
      state.cartItems.forEach((item) => (item.count = 0));
      state.cartItems = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  handleAddCartItem,
  handleDeleteCartItem,
  handleClearCart,
  handleIncreaseItemCount,
  handleDecreaseItemCount,
} = cartSlice.actions;

export default cartSlice.reducer;
