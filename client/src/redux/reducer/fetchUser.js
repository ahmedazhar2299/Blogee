import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: false,
}

export const userFetchSlice = createSlice({
  name: "fetchUser",
  initialState,
  reducers: {
    LOGIN_SUCCESS: (state,action) => {
        state.user = action.payload
        state.error = false
    },
    LOGIN_FAILURE: (state) => {
        state.user = null
        state.error = true
    },
  },
});

export const { LOGIN_SUCCESS, LOGIN_FAILURE } = userFetchSlice.actions;

export default userFetchSlice.reducer;
