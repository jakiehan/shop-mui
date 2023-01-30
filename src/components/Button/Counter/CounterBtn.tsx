import React from 'react';
import { ButtonStyled } from './CounterBtn.styled';

interface CounterBtnProps {
  value: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const CounterBtn = ({
  value,
  onClick,
  isDisabled,
}: CounterBtnProps) => (
  <ButtonStyled
    onClick={onClick}
    disabled={isDisabled}
    variant="text"
    color="secondary"
  >
    {value}
  </ButtonStyled>
);
