import React from 'react';
import Container from '../Container';
import Navigation from '../Navigation';
import Logo from '../Logo';

function Header() {
  return (
    <header>
      <Container>
        <Navigation>
          <Logo />
        </Navigation>
      </Container>
    </header>
  );
}

export default Header;
