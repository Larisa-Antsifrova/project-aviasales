import {
  fetchTicketsRequest,
  fetchTicketsSuccess,
  fetchTicketsError,
} from './tickets-actions';

// Imports of libraries
import axios from 'axios';
axios.defaults.baseURL = 'https://front-test.beta.aviasales.ru';

const fetchTickets = () => async dispatch => {
  dispatch(fetchTicketsRequest());

  try {
    const {
      data: { searchId },
    } = await axios.get('/search');

    const { data } = await axios.get(`/tickets?searchId=${searchId}`);
    dispatch(fetchTicketsSuccess(data));
  } catch (error) {
    dispatch(fetchTicketsError(error.message));
  }
};

export { fetchTickets };
