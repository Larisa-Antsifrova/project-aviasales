import React from 'react';
import Grid from '@material-ui/core/Grid';
import TicketItem from '../TicketItem';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { getFilteredTickets } from '../../redux/tickets/tickets-selectors';

const TicketsList = () => {
  const fiveItems = useSelector(getFilteredTickets).slice(0, 5);

  return (
    <Grid container component="ul" spacing={2}>
      {fiveItems.map(ticket => {
        return <TicketItem key={uuidv4()} ticket={ticket} />;
      })}
    </Grid>
  );
};

export default TicketsList;
