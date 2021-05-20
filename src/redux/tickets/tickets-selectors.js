// Imports from Redux Toolkit
// import { createSelector } from '@reduxjs/toolkit';

// Selector to get all tickets
const getAllTickets = state => state.tickets.allTickets;

const getTicketsLoading = state => state.tickets.ticketsLoading;

export { getAllTickets, getTicketsLoading };
