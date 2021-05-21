import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { updateBatch } from '../../redux/batch/batch-actions';
import {
  getError,
  getTicketsLoading,
} from '../../redux/tickets/tickets-selectors';
import { getSortedTickets } from '../../redux/sorting/sorting-selectors';
import { getBatch } from '../../redux/batch/batch-selectors';

const useStyles = makeStyles(theme => ({
  button: {
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: '#2196F3',
    '&:hover': {
      backgroundColor: '#2196F3',
    },
  },
  box: {
    paddingTop: theme.spacing(2),
  },
}));

const LoadMoreButton = () => {
  const classes = useStyles();

  const error = useSelector(getError);
  const loading = useSelector(getTicketsLoading);
  const sortedLength = useSelector(getSortedTickets).length;
  const currentBatchLenght = useSelector(getBatch) * 5;

  const dispatch = useDispatch();

  return (
    <>
      {!error && !loading && currentBatchLenght < sortedLength && (
        <Box className={classes.box}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            className={classes.button}
            onClick={() => dispatch(updateBatch(1))}
          >
            <Box component="span" fontWeight={600}>
              ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
            </Box>
          </Button>
        </Box>
      )}
    </>
  );
};

export default LoadMoreButton;
