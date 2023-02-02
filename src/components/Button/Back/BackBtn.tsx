import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonStyled } from './BackBtn.styled';

export const BackBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <ButtonStyled
      variant="outlined"
      onClick={handleClick}
    >
      🠔 Back
    </ButtonStyled>
  );
};

