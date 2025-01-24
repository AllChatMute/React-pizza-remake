import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PizzaBlockType from "../../types/PizzaBlockInterface";
import axios from "axios";

interface initialState {
  items: PizzaBlockType[];
  status: "pending" | "success" | "reject";
}
interface fetchPizzaParams {
  currentCategorie: number;
  currentSort: string;
  currentOrder: string;
  searchValue: string;
  currentPage: number;
}

const initialState = {
  items: [],
  status: "pending",
};

export const fetchPizza = createAsyncThunk(
  "pizza/fetchPizza",
  async (params: fetchPizzaParams) => {
    try {
      const {
        currentCategorie,
        currentSort,
        currentOrder,
        searchValue,
        currentPage,
      } = params;
      const category =
        currentCategorie > 0 ? `category=${currentCategorie}&` : "";
      const search = searchValue !== "" ? `&search=${searchValue}` : "";
      const response = await axios.get(
        `https://66cf3d37901aab24842179de.mockapi.io/Items?page=${
          currentPage + 1
        }&limit=4&${category}sortBy=${currentSort}&order=${currentOrder}${search}`
      );
      if (response.status !== 200) throw new Error();
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizza.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(fetchPizza.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchPizza.rejected, (state) => {
      console.log("ошибка");
      state.status = "reject";
      state.items = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
