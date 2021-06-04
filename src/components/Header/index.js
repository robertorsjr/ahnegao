import React from 'react';
import logo from '../../assets/logo.png'
import { Container, Link, Image, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Image img={logo} />
      <Wrapper>
        <Link>Envie seu meme</Link>
        <Link>Anunciar</Link>
        <Link>Sobre</Link>
        <Link>Destaques</Link>
        <Link>0</Link>
      </Wrapper>
    </Container>
  );
}

export default Header;