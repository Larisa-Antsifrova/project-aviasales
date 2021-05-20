import React from 'react';
import MuiContainer from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
  },
}));

const Container = ({ children }) => {
  const classes = useStyles();

  return (
    <MuiContainer className={classes.root} disableGutters>
      {children}
    </MuiContainer>
  );
};

export default Container;
