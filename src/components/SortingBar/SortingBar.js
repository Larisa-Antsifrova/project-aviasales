import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import sortingOptions from './sortingOptions';

import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <ButtonGroup
      color="primary"
      aria-label="outlined primary button group"
      className={classes.group}
    >
      {Object.keys(sortingOptions).map(option => {
        return (
          <Button key={option} className={classes.button}>
            {sortingOptions[option]}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default SortingBar;
