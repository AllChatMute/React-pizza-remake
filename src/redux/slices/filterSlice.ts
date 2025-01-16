import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  currentSort: string;
  currentCategorie: number;
  currentOrder: string;
}

const initialState: initialState = {
  currentSort: "rating",
  currentCategorie: 0,
  currentOrder: "asc",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCurrentSort: (state, action: PayloadAction<string>) => {
      state.currentSort = action.payload;
    },
    setCurrentCategorie: (state, action: PayloadAction<number>) => {
      state.currentCategorie = action.payload;
    },
    setCurrentOrder: (state, action: PayloadAction<string>) => {
      state.currentOrder = action.payload;
    },
  },
});

export const { setCurrentSort, setCurrentCategorie, setCurrentOrder } =
  filterSlice.actions;
export default filterSlice.reducer;
