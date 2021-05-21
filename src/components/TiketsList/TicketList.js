import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { getSortedTickets } from '../../redux/sorting/sorting-selectors';
import { getBatch } from '../../redux/batch/batch-selectors';
import {
  getError,
  getTicketsLoading,
} from '../../redux/tickets/tickets-selectors';
import TicketItem from '../TicketItem';
import ErrorMessage from '../ErrorMessage';

const useStyles = makeStyles(theme => ({
  spinner: {
    margin: '40px auto',
    color: '#2196F3',
  },
}));

const TicketsList = () => {
  const classes = useStyles();
  const allSortedTickets = useSelector(getSortedTickets);
  const currentBatch = useSelector(getBatch);
  const error = useSelector(getError);
  const loading = useSelector(getTicketsLoading);

  const [state, setState] = useState([]);
  const [renderable, setRenderable] = useState([]);

  useEffect(() => {
    setState(allSortedTickets);
  }, [allSortedTickets]);

  useEffect(() => {
    const to = currentBatch * 5;
    const from = to - 5;
    const renderableTickets = state.slice(from, to);

    setRenderable(prevState =>
      currentBatch === 1
        ? renderableTickets
        : [...prevState, ...renderableTickets],
    );
  }, [allSortedTickets, currentBatch, state]);

  return (
    <Grid container component="ul" spacing={2}>
      {loading && <CircularProgress className={classes.spinner} />}
      {error && !loading && <ErrorMessage />}
      {!error &&
        !loading &&
        renderable.map(ticket => {
          return <TicketItem key={uuidv4()} ticket={ticket} />;
        })}
    </Grid>
  );
};

export default TicketsList;
