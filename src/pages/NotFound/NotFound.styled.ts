import { styled, Link, Box, Typography } from '@mui/material';

const NotFoundStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

const TextStyled = styled(Typography)(({ theme }) => ({
  margin: '15.5rem 0 1.25rem',
  fontSize: '1.875rem',
  lineHeight: '1.06em'
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  color: '#245bd7',

  '&:hover': {
    opacity: .7
  }
}));

export { NotFoundStyled, TextStyled, LinkStyled }