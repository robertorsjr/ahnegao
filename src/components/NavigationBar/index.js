import React from 'react';
import { Container, Button } from './styles'

function NavigationBar({ condition, handleSwitchPage }) {
  return (
    <Container>
      {condition > 5 ? <Button onClick={() => handleSwitchPage(-5)}>{'<- Página anterior'}</Button> : <div />}
      <Button onClick={() => handleSwitchPage(5)}>{'Próxima página ->'}</Button>
    </Container>
  );
}

export default NavigationBar;