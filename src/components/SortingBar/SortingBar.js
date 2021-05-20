import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortingOptions from './sortingOptions';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { updateSorting } from '../../redux/sorting/sorting-actions';
import { getSorting } from '../../redux/sorting/sorting-selectors';

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
  const sortingState = useSelector(getSorting);
  const [state, setState] = useState(sortingState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSorting(state));
  }, [dispatch, state]);

  const handleClick = option => {
    const resetState = Object.keys(state).reduce(
      (state, key) => (state = { ...state, [key]: false }),
      {},
    );

    setState({
      ...resetState,
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
