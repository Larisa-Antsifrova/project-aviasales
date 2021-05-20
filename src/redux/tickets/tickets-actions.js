// Imports from Redux Toolkit
import { createAction } from '@reduxjs/toolkit';

// Actions for HTTP requests
const fetchTicketsRequest = createAction('tickets/fetchTicketsRequest');
const fetchTicketsSuccess = createAction('tickets/fetchTicketsSuccess');
const fetchTicketsError = createAction('tickets/fetchTicketsError');

export { fetchTicketsRequest, fetchTicketsSuccess, fetchTicketsError };
