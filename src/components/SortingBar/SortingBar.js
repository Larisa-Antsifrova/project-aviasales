import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortingOptions from './sortingOptions';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { updateSortedTickets } from '../../redux/sorting/sorting-actions';
import { getFilteredTickets } from '../../redux/tickets/tickets-selectors';
import { useSelector } from 'react-redux';
import {
  sortFastestTickets,
  sortCheapestTickets,
  sortOptimalTickets,
} from './sortingMethods';

const useStyles = makeStyles(theme => ({
  group: {
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  button: {
    width: '100%',
    padding: theme.spacing(2),
    border: '2px solid #DFE5EC',
    color: '#4A4A4A',
    backgroundColor: '#ffffff',
    '&:hover': {
      border: '2px solid #DFE5EC',
      color: '#4A4A4A',
      backgroundColor: '#ffffff',
    },
  },
  activeButton: {
    border: 'transparent',
    color: '#ffffff',
    backgroundColor: '#2196F3',
    '&:hover': {
      border: 'transparent',
      color: '#ffffff',
      backgroundColor: '#2196F3',
    },
  },
}));

const SortingBar = () => {
  const classes = useStyles();
  const initialSortingState = Object.keys(sortingOptions).reduce(
    (state, value) => (state = { ...state, [value]: false, fastest: true }),
    {},
  );
  const [state, setState] = useState(initialSortingState);

  const filteredTickets = useSelector(getFilteredTickets);

  const dispatch = useDispatch();
  useEffect(() => {
    const currentSortingOption = Object.keys(state).find(key => state[key]);

    switch (currentSortingOption) {
      case 'fastest':
        const fastestTickets = sortFastestTickets(filteredTickets);
        dispatch(updateSortedTickets(fastestTickets));
        break;
      case 'cheapest':
        const cheapestTickets = sortCheapestTickets(filteredTickets);
        dispatch(updateSortedTickets(cheapestTickets));
        break;
      case 'optimal':
        const optimalTickets = sortOptimalTickets(filteredTickets);
        dispatch(updateSortedTickets(optimalTickets));
        break;

      default:
        dispatch(updateSortedTickets(filteredTickets));
        break;
    }
  }, [dispatch, filteredTickets, state]);

  const handleClick = option => {
    setState({
      ...initialSortingState,
      fastest: false,
      [option]: true,
    });
  };

  return (
    <ButtonGroup
      color="primary"
      aria-label="outlined primary button group"
      className={classes.group}
    >
      {Object.keys(sortingOptions).map(option => {
        return (
          <Button
            key={option}
            className={
              state[option]
                ? `${classes.activeButton} ${classes.button}`
                : classes.button
            }
            onClick={() => handleClick(option)}
          >
            {sortingOptions[option]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default SortingBar;
