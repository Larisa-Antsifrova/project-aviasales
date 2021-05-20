// Imports from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Imports of reducers
import { ticketsReducer } from './tickets/tickets-reducers';
import { filtersReducer } from './filters/filters-reducers';

// Creating and configuring application store
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
