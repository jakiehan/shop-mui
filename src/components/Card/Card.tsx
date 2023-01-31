import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from 'types';
import { BASE_URL } from 'utils/constants';
import { Like } from '../Like';
import { CardStyled, CardMedia, Typography } from './Card.styled';

interface CardProps {
  cardInfo: Product;
}

export const Card = ({ cardInfo }: CardProps) => {
  const navigate = useNavigate();
  const { id, name, price, like, picture } = cardInfo;

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <CardStyled
      component="article"
      variant="outlined"
      onClick={handleClick}
    >
      <Like isActive={like} />
      <CardMedia
        className="card-image"
        component="img"
        src={`${BASE_URL}${picture.path}`}
        alt={name}
      />
      <Typography
        className="card-title"
        component="h2"
        title={name}
      >
        {name}
      </Typography>
      <Typography className="card-price">
        ${price.value}
      </Typography>
    </CardStyled>
  );
};
