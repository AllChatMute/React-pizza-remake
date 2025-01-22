import { PayloadAction } from "@reduxjs/toolkit";
import cartPizzaType from "../types/cartPizzaInterface";
import { localStateType } from "./setCartItemsToLS";

export type findPizzaFromCartType = (
  state: localStateType,
  action: PayloadAction<cartPizzaType | string>
) => cartPizzaType | undefined;

export const findPizzaFromCart: findPizzaFromCartType = (state, action) => {
  const foundedPizza = state.cartItems.find((item) => {
    if (typeof action.payload === "string") {
      return item.id === action.payload;
    } else {
      return item.id === action.payload.id;
    }
  });
  return foundedPizza;
};
