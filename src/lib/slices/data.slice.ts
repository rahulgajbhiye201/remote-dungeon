import { createSlice } from "@reduxjs/toolkit";
import { JobState } from "../../constants/types";

const initialState: JobState = {
  data: null,
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;

export default dataSlice.reducer;
