import { createReducer } from '@reduxjs/toolkit';
import { updateSortedTickets } from './sorting-actions';

const sorted = createReducer([], {
  [updateSortedTickets]: (_, { payload }) => payload,
});

export const sortingReducer = sorted;
