import cartPizzaType from "../types/cartPizzaInterface";

export type localStateType = { cartItems: cartPizzaType[] };
export type setCartItemsToLSType = (state: localStateType) => void;

export const setCartItemsToLS: setCartItemsToLSType = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cartItems));
};
