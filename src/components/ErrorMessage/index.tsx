import React from 'react';
import { ErrorMessageContainer } from './styles';

type Props = {
  error: string;
};

export default function ErrorMessage({ error }: Props) {
  return (
    <>
      <ErrorMessageContainer>{error}</ErrorMessageContainer>
    </>
  );
}
