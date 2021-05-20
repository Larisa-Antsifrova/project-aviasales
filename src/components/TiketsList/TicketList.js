import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TicketItem from '../TicketItem';
import { v4 as uuidv4 } from 'uuid';

import { getSortedTickets } from '../../redux/sorting/sorting-selectors';

import { useSelector } from 'react-redux';

const TicketsList = () => {
  const allSortedTickets = useSelector(getSortedTickets);

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(allSortedTickets);
  }, [allSortedTickets]);

  return (
    <Grid container component="ul" spacing={2}>
      {state.slice(0, 5).map(ticket => {
        return <TicketItem key={uuidv4()} ticket={ticket} />;
      })}
    </Grid>
  );
};

export default TicketsList;
