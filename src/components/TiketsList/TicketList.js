import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { v4 as uuidv4 } from 'uuid';
import { getSortedTickets } from '../../redux/sorting/sorting-selectors';
import { getBatch } from '../../redux/batch/batch-selectors';
import TicketItem from '../TicketItem';

import { useSelector } from 'react-redux';

const TicketsList = () => {
  const allSortedTickets = useSelector(getSortedTickets);
  const currentBatch = useSelector(getBatch);

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
      {renderable.map(ticket => {
        return <TicketItem key={uuidv4()} ticket={ticket} />;
      })}
    </Grid>
  );
};

export default TicketsList;
