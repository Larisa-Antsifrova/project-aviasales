import { createAction } from '@reduxjs/toolkit';

const fetchTicketsRequest = createAction('tickets/fetchTicketsRequest');
const fetchTicketsSuccess = createAction('tickets/fetchTicketsSuccess');
const fetchTicketsError = createAction('tickets/fetchTicketsError');

export { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsError };
