import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import logoImage from './logo.svg';

const useStyles = makeStyles(theme => ({
  logoImage: {
    transform: 'scale(1)',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <NavLink exact to={'/'}>
      <img src={logoImage} alt="Company avatar" className={classes.logoImage} />
    </NavLink>
  );
};

export default Logo;
