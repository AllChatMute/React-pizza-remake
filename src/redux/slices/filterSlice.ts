import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  currentSort: string;
  currentCategorie: number;
}

const initialState: initialState = {
  currentSort: "rating",
  currentCategorie: 0,
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
  },
});

export const { setCurrentSort, setCurrentCategorie } = filterSlice.actions;
export default filterSlice.reducer;
