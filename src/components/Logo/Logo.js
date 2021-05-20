import React from 'react';
import Link from '@material-ui/core/Link';
import logoImage from './logo.png';
import { makeStyles } from '@material-ui/core/styles';

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
    <Link href="#">
      <img src={logoImage} alt="Company avatar" className={classes.logoImage} />
    </Link>
  );
};

export default Logo;
