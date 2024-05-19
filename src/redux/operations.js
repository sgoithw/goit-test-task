import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66351b839bb0df2359a3d62c.mockapi.io';

//createAsyncThunk

export const fetchAdverts = createAsyncThunk(
  'fetchAdverts/adverts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
