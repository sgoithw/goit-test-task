import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
  ads: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.ads = payload;
      })
      .addMatcher(a => a.type.endsWith('adverts/pending'), handlePending)
      .addMatcher(a => a.type.endsWith('adverts/rejected'), handleRejected)
      .addMatcher(a => a.type.endsWith('adverts/fulfilled'), handleFulfilled);
  },
});

export default adsSlice.reducer;
