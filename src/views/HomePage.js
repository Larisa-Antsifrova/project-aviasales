import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '../components/Container';
import Filter from '../components/Filter';
import SortingBar from '../components/SortingBar';
import TicketList from '../components/TiketsList';
import LoadMoreButton from '../components/LoadMoreButton';

export default function TicketsPage() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Filter />
        </Grid>
        <Grid item xs={12} md={8}>
          <SortingBar />
          <TicketList />
          <LoadMoreButton />
        </Grid>
      </Grid>
    </Container>
  );
}
