import { createSlice } from '@reduxjs/toolkit';

const searchInitialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    changeSearchStr(_, action) {
      return action.payload;
    },
  },
});

export const { changeSearchStr } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
