import React from 'react';
import first from '../../assets/firstAdvert.png'
import second from '../../assets/secondAdvert.png'
import last from '../../assets/lastAdvert.png'
import Separator from '../Separator';
import { Container, Line, Image } from './styles';

function Adverts() {
  return (
    <Container>
      <Line />
      <Image img={first} y={220} />
      <Separator y={10} />
      <Line />
      <Image img={second} y={186} />
      <Separator y={10} />
      <Image img={last} y={150} />
      <Separator y={10} />
      <Line />
    </Container>

  );
}

export default Adverts;