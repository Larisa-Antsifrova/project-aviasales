import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortingOptions from './sortingOptions';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { updateSortedTickets } from '../../redux/sorting/sorting-actions';
import { getFilteredTickets } from '../../redux/tickets/tickets-selectors';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  group: {
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  button: {
    width: '100%',
  },
}));

const SortingBar = () => {
  const classes = useStyles();
  const initialSortingState = Object.keys(sortingOptions).reduce(
    (state, value) => (state = { ...state, [value]: false }),
    {},
  );
  const [state, setState] = useState(initialSortingState);

  const filteredTickets = useSelector(getFilteredTickets);

  const dispatch = useDispatch();
  useEffect(() => {
    const currentSortingOption = Object.keys(state).find(key => state[key]);
    console.log('currentSortingOption', currentSortingOption);

    switch (currentSortingOption) {
      case 'fastest':
        const fastestTickets = filteredTickets
          .slice()
          .sort((a, b) => b.price - a.price);
        dispatch(updateSortedTickets(fastestTickets));
        break;
      case 'cheapest':
        const cheapestTickets = filteredTickets
          .slice()
          .sort((a, b) => a.price - b.price);
        dispatch(updateSortedTickets(cheapestTickets));
        break;
      case 'optimal':
        break;

      default:
        break;
    }
  }, [dispatch, filteredTickets, state]);

  const handleClick = option => {
    setState({
      ...initialSortingState,
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
            className={classes.button}
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
