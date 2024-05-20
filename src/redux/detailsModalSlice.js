import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  id: null,
};

const detailsModalSlice = createSlice({
  name: 'detailsModal',
  initialState,
  reducers: {
    showDetailsModal: (state, { payload }) => {
      state.isOpen = true;
      state.id = payload;
    },
    closeDetailsModal: state => {
      state.isOpen = false;
      state.id = null;
    },
  },
});

export const { showDetailsModal, closeDetailsModal } =
  detailsModalSlice.actions;

export default detailsModalSlice.reducer;
