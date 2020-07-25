import React from 'react';
import { ButtonContainer } from './styles';

export const Button = ({ children, callback }) => {
  return <ButtonContainer onClick={callback}>{children}</ButtonContainer>;
};
