import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    filterContact(state, action) {
      state.status = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;