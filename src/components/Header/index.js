import React from 'react';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Container, Link, Image, Wrapper } from './styles';

function Header() {
  return (
    <Container>
      <Image img={logo} />
      <Wrapper>
        <Link href='https://www.ahnegao.com.br/enviar-dica'>Envie seu meme</Link>
        <Link href='https://www.ahnegao.com.br/anunciar'>Anunciar</Link>
        <Link href='https://www.ahnegao.com.br/sobre'>Sobre</Link>
        <Link>Destaques</Link>
        <Link><FontAwesomeIcon icon={faSearch} /></Link>
      </Wrapper>
    </Container>
  );
}

export default Header;