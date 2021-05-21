import { createReducer } from '@reduxjs/toolkit';
import { updateBatch } from './batch-actions';

const batch = createReducer(1, {
  [updateBatch]: (state, { payload }) => (payload ? state + payload : 1),
});

export const batchReducer = batch;
