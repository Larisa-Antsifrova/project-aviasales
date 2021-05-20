import { createReducer } from '@reduxjs/toolkit';
import sortingOptions from '../../components/SortingBar/sortingOptions';
import { updateSorting } from './sorting-actions';

const initialSortingOptions = Object.keys(sortingOptions).reduce(
  (state, value) => (state = { ...state, [value]: value === 'fastest' }),
  {},
);

const sorting = createReducer(initialSortingOptions, {
  [updateSorting]: (_, { payload }) => payload,
});

export const sortingReducer = sorting;
