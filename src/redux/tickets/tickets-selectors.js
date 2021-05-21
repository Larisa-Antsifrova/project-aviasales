// Imports from Redux Toolkit
import { createSelector } from '@reduxjs/toolkit';
import { getAllFilters } from '../filters/filters-selectors';
import _ from 'lodash';

// Selector to get all tickets
const getAllTickets = state => state.tickets.allTickets;

const getTicketsLoading = state => state.tickets.ticketsLoading;

const getError = state => state.tickets.error;

// Selector to get filtered tickets
const getFilteredTickets = createSelector(
  [getAllTickets, getAllFilters],
  (tickets, filters) => {
    let filteredTickets = [];

    if (filters.all) {
      filteredTickets = [...tickets];

      return filteredTickets;
    }

    if (filters.noTransfer) {
      const noTransferTickets = tickets.filter(({ segments }) =>
        segments.every(({ stops }) => _.isEmpty(stops)),
      );

      filteredTickets = [...filteredTickets, ...noTransferTickets];
    }

    if (filters.oneTransfer) {
      const oneTransferTickets = tickets.filter(({ segments }) =>
        segments.every(({ stops }) => stops.length === 1),
      );

      filteredTickets = [...filteredTickets, ...oneTransferTickets];
    }

    if (filters.twoTransfers) {
      const twoTransfersTickets = tickets.filter(({ segments }) =>
        segments.every(({ stops }) => stops.length === 2),
      );

      filteredTickets = [...filteredTickets, ...twoTransfersTickets];
    }

    if (filters.threeTransfers) {
      const threeTransfersTickets = tickets.filter(({ segments }) =>
        segments.every(({ stops }) => stops.length === 3),
      );

      filteredTickets = [...filteredTickets, ...threeTransfersTickets];
    }

    return filteredTickets;
  },
);

export { getAllTickets, getTicketsLoading, getError, getFilteredTickets };
