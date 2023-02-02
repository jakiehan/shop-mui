import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormSearch } from 'features/FormSearch';
import { BackBtn } from '../Button/Back';
import { Navigation } from '../Navigation';
import { HeaderStyled, ContainerStyled } from "./Header.styled";

export const Header = () => {
  const location = useLocation().pathname;
  const isProductPage = location.startsWith('/product');

  return (
    <HeaderStyled position="static">
      <ContainerStyled
        variant="dense"
      >
        {isProductPage && <BackBtn />}
        {!isProductPage && <FormSearch />}
        <Navigation />
      </ContainerStyled>
    </HeaderStyled>
  );
};
