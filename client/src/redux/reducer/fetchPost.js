import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  error: false
}

export const postFetchSlice = createSlice({
  name: "fetchPost",
  initialState,
  reducers: {
    POST_SUCCESS: (state,action) => {
        state.post = action.payload;
        state.error = false
    },
    POST_FAILURE: (state) => {
        state.post = null
        state.error = true
    },
  },
});

export const { POST_SUCCESS, POST_FAILURE } = postFetchSlice.actions;

export default postFetchSlice.reducer;
