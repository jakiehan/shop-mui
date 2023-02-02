import { Card as CardComponent, CardMedia, styled, Typography } from '@mui/material';

const CardStyled = styled(CardComponent)(({ theme }) => ({
  width: '9.688rem',
  height: '17rem',
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  borderRadius: '0.625rem',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.color.lightGrey,
    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.15)',
  },

  [theme.breakpoints.up('sm')]: {
    width: '13.75rem'
  },

  '.card-image': {
    height: '8.75rem',
    margin: '0.5rem 0',
    objectFit: 'none',
  },

  '.card-title': {
    width: '100%',
    padding: '0.594rem 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '1.125rem',
    lineHeight: '1.17em',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    color: theme.color.darkGrey,
  },

  '.card-price': {
    padding: '0.125rem 0',
    fontSize: '0.875rem',
    lineHeight: '1.14em',
    color: '#545454',
  }
})) as typeof CardComponent;

export { CardStyled, CardMedia, Typography }