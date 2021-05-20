import { createReducer } from '@reduxjs/toolkit';
import filterOptions from '../../components/Filter/filterOptions';
import { updateFilters } from './filters-actions';

const initialFilterOptions = Object.keys(filterOptions).reduce(
  (state, value) => (state = { ...state, [value]: value === 'all' }),
  {},
);

const filters = createReducer(initialFilterOptions, {
  // [updateFilters]: (state, { payload }) => ({ ...state, ...payload }),
  [updateFilters]: (state, { payload }) => payload,
});

export const filtersReducer = filters;
