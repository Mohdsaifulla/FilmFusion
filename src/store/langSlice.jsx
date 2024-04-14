import { createSlice } from "@reduxjs/toolkit";

const langChange = createSlice({
  name: "changeLang",
  initialState: {
    lang: "en",
  },
  reducers: {
    changedLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { changedLanguage } = langChange.actions;
export default langChange.reducer;
