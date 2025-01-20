import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import search from "./slices/searchSlice";
import cart from "./slices/cartSlice";
import paginate from "./slices/paginateSlice";
import pizza from "./slices/pizzaSlice";

export const store = configureStore({
  reducer: { filter, search, cart, paginate, pizza },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
