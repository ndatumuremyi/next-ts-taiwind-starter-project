import { createSlice } from '@reduxjs/toolkit';
import http from '@/utils/http';
import endpoints from '@/utils/constants/endpoints';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false, isLoading: false },
  reducers: {
    loginPending(state) {
      state.isLoading = true;
    },
    loginSuccess(state) {
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    loginFailure(state) {
      state.isLoading = false;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
