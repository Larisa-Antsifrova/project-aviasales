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
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { format, add } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  paper: {
    padding: theme.spacing(3),
  },
  text: {
    color: '#2196F3',
  },
  tableHead: {
    color: '#A0B0B9',
  },
  cell: {
    borderBottom: 'none',
    padding: theme.spacing(1),
    width: '30%',
  },
}));

const TicketItem = ({ ticket }) => {
  const classes = useStyles();

  const formatedPrice = formatPrice(ticket.price);
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
          <Typography>
            <Box
              component="span"
              fontWeight={600}
              fontSize={24}
              className={classes.text}
            >{`${formatedPrice} P`}</Box>
          </Typography>
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
                  <TableCell className={classes.cell}>
                    <Box
                      component="span"
                      fontWeight={600}
                      className={classes.tableHead}
                    >{`${segment.origin} - ${segment.destination}`}</Box>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <Box
                      component="span"
                      fontWeight={600}
                      className={classes.tableHead}
                    >
                      В ПУТИ
                    </Box>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <Box
                      component="span"
                      fontWeight={600}
                      className={classes.tableHead}
                    >
                      {`${transfers ? transfers : ''} ${transfersTableHeader}`}
                    </Box>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.cell}>
                    <Box
                      component="span"
                      fontWeight={600}
                    >{`${departureTime} - ${arrivalTime}`}</Box>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <Box component="span" fontWeight={600}>
                      {`${hours}ч ${minutes}м`}
                    </Box>
                  </TableCell>
                  <TableCell className={classes.cell}>
                    <Box component="span" fontWeight={600}>
                      {segment.stops.join(', ')}
                    </Box>
                  </TableCell>
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

function formatPrice(price) {
  const stringifiedPrice = price + '';
  const splitPrice = stringifiedPrice.split('');
  const last = splitPrice.splice(-3).join('');
  const first = splitPrice.join('');

  return `${first} ${last}`;
}

export default TicketItem;
