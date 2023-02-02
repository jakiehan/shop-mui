import React from 'react';
import { PreloaderStyled, CircularProgress } from './Preloader.styled';

export const Preloader = () => (
  <PreloaderStyled>
    <CircularProgress
      color="secondary"
      size={70}
    />
  </PreloaderStyled>
);
