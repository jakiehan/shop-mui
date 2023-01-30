import React from 'react';
import { LikeStyled, Favorite, FavoriteBorder } from './Like.styled';

interface LikeProps {
  isActive: boolean;
}

export const Like = ({ isActive}: LikeProps) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <LikeStyled
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite color="secondary" />}
      checked={isActive}
      onClick={(e) => handleClick(e)}
    />
  );
};

