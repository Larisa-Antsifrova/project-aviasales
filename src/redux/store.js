// Imports from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// Imports of reducers
import { ticketsReducer } from './tickets/tickets-reducers';

// Creating and configuring application store
const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
