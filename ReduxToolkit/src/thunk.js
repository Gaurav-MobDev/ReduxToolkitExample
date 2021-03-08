import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginAPI} from './network';

// First, create the thunk
export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async ({email, password}, thunkAPI) => {
    const response = await loginAPI({email, password});
    return response;
  },
);
