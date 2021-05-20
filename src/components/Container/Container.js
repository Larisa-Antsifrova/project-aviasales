import React from 'react';
import PropTypes from 'prop-types';
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

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
