import {createSlice} from '@reduxjs/toolkit';
import {fetchUser} from './thunk';
const initialState = {
  email: '',
  password: '',
  loading: '',
  error: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    doLogin(state) {
      state.loading = true;
    },
    loginSuccess(state, {payload: {email: userEmail, password: userPassword}}) {
      state.loading = false;
      state.email = userEmail;
      state.password = userPassword;
    },
    loginFailure(state, {payload: {error: apiError}}) {
      state.loading = false;
      state.error = apiError;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUser.fulfilled]: (state, action) => {
      const {
        payload: {email: userEmail, password: userPassword},
      } = action;
      state.email = userEmail;
      state.password = userPassword;
    },
  },
});

export const {doLogin, loginSuccess, loginFailure} = loginSlice.actions;
export default loginSlice.reducer;
