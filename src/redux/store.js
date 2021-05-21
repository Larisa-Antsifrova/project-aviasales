import { configureStore } from '@reduxjs/toolkit';
import { ticketsReducer } from './tickets/tickets-reducers';
import { filtersReducer } from './filters/filters-reducers';
import { sortingReducer } from './sorting/sorting-reducers';
import { batchReducer } from './batch/batch-reducers';

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
    sorted: sortingReducer,
    batch: batchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
