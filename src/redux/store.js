import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { searchReducer } from './searchSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    search: searchReducer,
  },
});
