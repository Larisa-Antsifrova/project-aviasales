import React from 'react';
import Grid from '@material-ui/core/Grid';
import TicketItem from '../TicketItem';
import tickets from './tickets.json';
import { v4 as uuidv4 } from 'uuid';

const TicketsList = () => {
  return (
    <Grid container component="ul" spacing={2}>
      {tickets.map(ticket => {
        return <TicketItem key={uuidv4()} ticket={ticket} />;
      })}
    </Grid>
  );
};

export default TicketsList;
