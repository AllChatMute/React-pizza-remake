import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartPizzaType from "../../types/cartPizzaInterface";
import { setCartItemsToLS } from "../../utils/setCartItemsToLS";
import { findPizzaFromCart } from "../../utils/findPizzaFromCart";

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
      const foundedPizza = findPizzaFromCart(state, action);

      if (foundedPizza) {
        foundedPizza.count++;
        setCartItemsToLS(state);
      } else {
        state.cartItems.push(action.payload);
        setCartItemsToLS(state);
      }
    },

    handleDeleteCartItem: (state, action: PayloadAction<string>) => {
      const foundedPizza = findPizzaFromCart(state, action);

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== foundedPizza?.id
      );

      setCartItemsToLS(state);
    },

    handleIncreaseItemCount: (state, action: PayloadAction<string>) => {
      const foundedPizza = findPizzaFromCart(state, action);
      if (foundedPizza) foundedPizza.count++;
      setCartItemsToLS(state);
    },

    handleDecreaseItemCount: (state, action: PayloadAction<string>) => {
      const foundedPizza = findPizzaFromCart(state, action);

      if (foundedPizza && foundedPizza.count > 1) {
        foundedPizza.count--;
        setCartItemsToLS(state);
      } else if (foundedPizza && foundedPizza.count <= 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== foundedPizza.id
        );
        setCartItemsToLS(state);
      }
    },

    handleClearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", "[]");
    },
  },
});

export const selectCartItems = (state: {
  cart: { cartItems: cartPizzaType[] };
}) => state.cart.cartItems;

export const {
  handleAddCartItem,
  handleDeleteCartItem,
  handleClearCart,
  handleIncreaseItemCount,
  handleDecreaseItemCount,
} = cartSlice.actions;
export default cartSlice.reducer;
