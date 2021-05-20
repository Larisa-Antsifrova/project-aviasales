import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  nav: {
    textAlign: 'center',
  },
}));

function Navigation({ children }) {
  const classes = useStyles();

  return <nav className={classes.nav}>{children}</nav>;
}

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
