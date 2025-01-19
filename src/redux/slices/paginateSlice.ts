import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  currentPage: number;
}

const initialState: initialState = {
  currentPage: 0,
};

export const paginateSlice = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginateSlice.actions;
export default paginateSlice.reducer;
