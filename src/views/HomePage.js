import React from 'react';
import Container from '../components/Container';
import Grid from '@material-ui/core/Grid';

export default function TicketsPage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <h2>Filter</h2>
        </Grid>
        <Grid item xs={12} md={8}>
          <h2>List</h2>
        </Grid>
      </Grid>
    </Container>
  );
}
