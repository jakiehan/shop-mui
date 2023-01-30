import React from 'react';
import { ListProducts } from 'features/ListProducts';
import { ContainerStyled } from './Products.styled';

export const Products = () => (
  <ContainerStyled component="section">
    <ListProducts />
  </ContainerStyled>
);
