// Imports from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Imports of reducers
import { ticketsReducer } from './tickets/tickets-reducers';
import { filtersReducer } from './filters/filters-reducers';
import { sortingReducer } from './sorting/sorting-reducers';

// Creating and configuring application store
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
    sorted: sortingReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
