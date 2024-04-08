import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "search",
  initialState: {
    toggleSearch: false,
  },
  reducers: {
    addSearch: (state) => {
      state.toggleSearch = !state.toggleSearch;
    },
  },
});
export const { addSearch } = gptSlice.actions;
export default gptSlice.reducer;
