import { Checkbox, styled } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const LikeStyled = styled(Checkbox)(({ theme }) => ({
  alignSelf: 'end',
  padding: 0,
  color: theme.color.middleGrey,
  cursor: 'pointer',

  svg: {
    filter: 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))',
  },

  '&:hover': {
    opacity: .5
  }
}));

export { LikeStyled, Favorite, FavoriteBorder }

