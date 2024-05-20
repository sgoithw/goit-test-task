import { createSlice } from '@reduxjs/toolkit';
import { type } from '@testing-library/user-event/dist/type';

const initialState = {
  filter: {
    location: '',
    details: [],
    transmission: '',
    vanType: 'panelTruck',
  },
  showFirst: 4,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
      state.showFirst = 4;
    },
    setShowFirst: (state, { payload }) => {
      state.showFirst = payload;
    },
  },
});

export const { setFilter, setShowFirst } = filterSlice.actions;
export default filterSlice.reducer;
