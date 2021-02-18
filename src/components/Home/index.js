import React from 'react';

import { Container } from './styles';
import Button from '../Button';

function Home() {
  return (
    <Container>
      <h1>Become the King</h1>
      <p>
        Come and be part of the magical forest. Venture into a  realm with beings
        beyond imagination, endless possibilities and surprising challenges.
      </p>

      <Button theme='home'>
        <a href="/">Get Start</a>
      </Button>
    </Container>
  );
}

export default Home;

