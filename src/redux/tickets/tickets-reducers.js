// Redux imports
import { combineReducers } from 'redux';

// Imports from Redux Toolkit
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsError,
} from './tickets-actions';

const allTickets = createReducer([], {
  [fetchTicketsSuccess]: (_, { payload }) => payload.tickets,
});

const stop = createReducer(false, {
  [fetchTicketsSuccess]: (_, { payload }) => payload.stop,
});

const error = createReducer(null, {
  [fetchTicketsError]: (_, { payload }) => payload,
});

const ticketsLoading = createReducer(false, {
  [fetchTicketsRequest]: () => true,
  [fetchTicketsSuccess]: () => false,
  [fetchTicketsError]: () => false,
});

export const ticketsReducer = combineReducers({
  allTickets,
  stop,
  error,
  ticketsLoading,
});
