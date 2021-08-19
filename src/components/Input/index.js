import React from 'react';
import { InputContainer } from './styles';

export default function Input({ ...rest }) {
  return (
    <>
      <InputContainer {...rest} autoCapitalize="none" />
    </>
  );
}
