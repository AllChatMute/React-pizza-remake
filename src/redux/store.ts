import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import search from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import paginate from "./slices/paginateSlice";
import pizza from "./slices/pizzaSlice";
import fullPizza from "./slices/fullPizzaSlice";

export const store = configureStore({
  reducer: { filter, search, cart, paginate, pizza, fullPizza },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
