import { createSlice } from "@reduxjs/toolkit";

const filters = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filters.actions;

// Selector
export const selectNameFilter = (state) => state.filters.value;

export default filters.reducer;
