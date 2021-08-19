import React from 'react';
import { ButtonContainer, Title } from './styles';

export default function Button({ title, ...rest }) {
  return (
    <>
      <ButtonContainer {...rest}>
        <Title>{title}</Title>
      </ButtonContainer>
    </>
  );
}
