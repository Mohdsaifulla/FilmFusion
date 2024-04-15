import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchItem: null,
    getSearchMovies:[],
  },
  reducers: {
    addSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
    addSearchMovies:(state,action)=>{
        state.getSearchMovies=action.payload
    }
  },
});
export const { addSearchItem ,addSearchMovies} = searchSlice.actions;
export default searchSlice.reducer;
