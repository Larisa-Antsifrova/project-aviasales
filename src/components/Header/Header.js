import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import Logo from '../Logo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container>
        <Navigation>
          <Logo />
        </Navigation>
      </Container>
    </header>
  );
}

export default Header;
