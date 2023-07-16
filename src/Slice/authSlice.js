import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthorized: false,
    username: 'Gyongju.Kim',
  },
  reducers: {
    setIsAuthorized: (state, active) => {
      state.isAuthorized = active.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload.value;
    }
  }
})

export const { setIsAuthorized, setUsername } = authSlice.actions
export default authSlice.reducer;