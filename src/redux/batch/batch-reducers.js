import { createReducer } from '@reduxjs/toolkit';
import { updateBatch } from './batch-actions';

const batch = createReducer(1, {
  [updateBatch]: (state, { payload }) => state + payload,
});

export const batchReducer = batch;
