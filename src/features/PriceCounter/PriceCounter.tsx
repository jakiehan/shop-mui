import React from 'react';
import { CounterBtn } from 'components/Button/Counter';
import type { Price } from 'types';
import { usePriceCounter } from './usePriceCounter';
import { PriceCounterStyled, FieldStyled, CounterStyled, PriceStyled } from './PriceCounter.styled';

interface PriceCounterProps {
  price: Price
}

export const PriceCounter = ({ price }: PriceCounterProps) => {
  const { value } = price;

  const [handleDecrementClick, handleIncrementClick, { sumPrice, num }] = usePriceCounter(value);

  const disabled = num === 1;

  return (
    <PriceCounterStyled>
      <PriceStyled>
        ${sumPrice}
      </PriceStyled>
      <CounterStyled>
        <CounterBtn
          value="−"
          onClick={handleDecrementClick}
          isDisabled={disabled}
        />
        <FieldStyled
          disableUnderline
          type="text"
          value={num}
        />
        <CounterBtn
          value="+"
          onClick={handleIncrementClick}
        />
      </CounterStyled>
    </PriceCounterStyled>
  );
};

