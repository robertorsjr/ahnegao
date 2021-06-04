import React from 'react';
import { Container, Link, Copyright, Wrapper } from './styles';

function Footer() {
  return (
    <Container>
      <Wrapper direction='column'>
        <Copyright>Copyright © 2008-2021 Ah Negão!</Copyright>
        <Link>Política de privacidade</Link>
      </Wrapper>
      <Wrapper>
        <Link href="https://www.facebook.com/AhNegao">Facebook</Link>
        <Link href="https://twitter.com/AhNegao">Twitter</Link>
        <Link href='https://www.instagram.com/ahnegao'>Instagram</Link>
        <Link href='https://www.ahnegao.com.br/contato'>Contato</Link>
      </Wrapper>
    </Container>
  );
}

export default Footer;