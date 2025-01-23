import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PizzaBlockType from "../../types/PizzaBlockInterface";
import axios from "axios";

interface initialState {
  fullPizza: PizzaBlockType | null;
  status: "pending" | "success" | "reject";
}

const initialState: initialState = {
  fullPizza: null,
  status: "pending",
};

export const fetchFullPizza = createAsyncThunk(
  "fullPizza/fetchFullPizza",
  async (id: string | undefined) => {
    try {
      const response = await axios.get(
        `https://66cf3d37901aab24842179de.mockapi.io/Items/${id}`
      );
      if (response.status !== 200) throw new Error();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fullPizzaSlice = createSlice({
  name: "fullPizza",
  initialState,
  reducers: {
    setFullPizza: (state, action) => {
      state.fullPizza = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFullPizza.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(fetchFullPizza.rejected, (state) => {
      state.status = "reject";
    });
  },
});

export const { setFullPizza } = fullPizzaSlice.actions;
export default fullPizzaSlice.reducer;
