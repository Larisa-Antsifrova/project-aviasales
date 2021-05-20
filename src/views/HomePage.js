import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '../components/Container';
import Filter from '../components/Filter';

export default function TicketsPage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <h2>Filter</h2>
          <Filter />
        </Grid>
        <Grid item xs={12} md={8}>
          <h2>List</h2>
        </Grid>
      </Grid>
    </Container>
  );
}
