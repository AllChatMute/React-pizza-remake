import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartPizzaType from "../../types/cartPizzaInterface";

interface initialState {
  cartItems: cartPizzaType[];
}

const initialState: initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart") ?? "[]"),
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
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      } else {
        state.cartItems.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    handleDeleteCartItem: (state, action: PayloadAction<string>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== foundedPizza?.id
      );

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    handleIncreaseItemCount: (state, action: PayloadAction<string>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (foundedPizza) foundedPizza.count++;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    handleDecreaseItemCount: (state, action: PayloadAction<string>) => {
      const foundedPizza = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (foundedPizza && foundedPizza.count > 1) {
        foundedPizza.count--;
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      } else if (foundedPizza && foundedPizza.count <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== foundedPizza.id
        );
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      }
    },
    handleClearCart: (state) => {
      state.cartItems.forEach((item) => (item.count = 0));
      state.cartItems = [];
      localStorage.setItem("cart", "[]");
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
