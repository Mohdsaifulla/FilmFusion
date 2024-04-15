import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";
import searchReducer from "./searchSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    search: gptReducer,
    changeLang: langReducer,
    searchMovies: searchReducer,
  },
});
export default appStore;
