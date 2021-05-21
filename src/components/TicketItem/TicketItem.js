import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { format, add } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const TicketItem = ({ ticket }) => {
  const classes = useStyles();

  const history = useHistory();

  const handleClick = () => {
    history.push('/ticket-info');
  };

  return (
    <Grid
      item
      xs={12}
      component="li"
      onClick={() => {
        handleClick();
      }}
    >
      <Paper className={classes.paper}>
        <Box className={classes.box}>
          <p>{`${ticket.price} P`}</p>
          <img
            src={`//pics.avs.io/99/36/{${ticket.carrier}}.png`}
            alt="Carrier logo"
          />
        </Box>

        {ticket.segments.map(segment => {
          const transfers = segment.stops.length;
          let transfersTableHeader;

          if (!transfers) {
            transfersTableHeader = 'БЕЗ ПЕРЕСАДОК';
          } else if (transfers === 1) {
            transfersTableHeader = 'ПЕРЕСАДКА';
          } else if (transfers > 1 && transfers < 5) {
            transfersTableHeader = 'ПЕРЕСАДКИ';
          } else {
            transfersTableHeader = 'ПЕРЕСАДОК';
          }

          const hours = Math.floor(segment.duration / 60);
          const minutes = segment.duration % 60;
          const departureTime = format(new Date(segment.date), 'hh:mm');
          const arrivalTime = format(
            add(new Date(segment.date), {
              minutes: segment.duration,
            }),
            'hh:mm',
          );

          return (
            <Table key={uuidv4()} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{`${segment.origin} - ${segment.destination}`}</TableCell>
                  <TableCell>В ПУТИ</TableCell>
                  <TableCell>{`${
                    transfers ? transfers : ''
                  } ${transfersTableHeader}`}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{`${departureTime} - ${arrivalTime}`}</TableCell>
                  <TableCell>{`${hours}ч ${minutes}м`}</TableCell>
                  <TableCell>{segment.stops.join(', ')}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          );
        })}
      </Paper>
    </Grid>
  );
};

TicketItem.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(
      PropTypes.shape({
        origin: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        stops: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.number.isRequired,
      }),
    ),
  }),
};
export default TicketItem;
