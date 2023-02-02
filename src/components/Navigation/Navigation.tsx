import React from 'react';
import { NavigationStyled, IconButton, ShoppingCartOutlinedIcon, AccountCircleOutlinedIcon } from './Navigation.styled';

export const Navigation = () => (
  <NavigationStyled component="nav">
    <IconButton edge="start">
      <ShoppingCartOutlinedIcon />
    </IconButton>
    <IconButton edge="end">
      <AccountCircleOutlinedIcon />
    </IconButton>
  </NavigationStyled>
);
