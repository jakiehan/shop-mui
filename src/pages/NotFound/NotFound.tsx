import React from 'react';
import { NotFoundStyled, TextStyled, LinkStyled } from './NotFound.styled';

export const NotFound = () => (
  <NotFoundStyled>
    <TextStyled>Not Found...</TextStyled>
    <LinkStyled
      href="/"
      underline="none"
    >
      Go main page
    </LinkStyled>
  </NotFoundStyled>
);
