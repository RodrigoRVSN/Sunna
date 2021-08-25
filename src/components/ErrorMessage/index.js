import React from 'react';
import { ErrorMessageContainer } from './styles';

export default function ErrorMessage({ error }) {
  return (
    <>
      <ErrorMessageContainer>{error}</ErrorMessageContainer>
    </>
  );
}
