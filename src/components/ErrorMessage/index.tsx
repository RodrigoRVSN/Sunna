import React from 'react';
import { ErrorMessageContainer } from './styles';

type Props = {
  error: string;
};

export default function ErrorMessage({ error }: Props): JSX.Element {
  return (
    <>
      <ErrorMessageContainer>{error}</ErrorMessageContainer>
    </>
  );
}
