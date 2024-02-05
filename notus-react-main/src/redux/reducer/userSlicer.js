import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
      console.log("called");
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      console.log("called");
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess, loginFail, clearError, clearMessage } = userSlice.actions

export default userSlice.reducer