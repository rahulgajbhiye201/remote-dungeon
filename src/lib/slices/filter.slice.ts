import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    fetchFilteredData: (state, action) => {
      state.category = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchFilteredData } = filterSlice.actions;

export default filterSlice.reducer;
