import { Box, styled } from '@mui/material';

const gradient1 = '-webkit-gradient(linear,left bottom, left top,from(rgba(0, 0, 0, 0.15)),color-stop(50%, rgba(255, 255, 255, 0)))';
const gradient2 = '-o-linear-gradient(bottom,rgba(0, 0, 0, 0.15) 0%,rgba(255, 255, 255, 0) 50%)';
const gradient3 = 'linear-gradient(360deg,rgba(0, 0, 0, 0.15) 0%,rgba(255, 255, 255, 0) 50%)';

const ProductDetailsStyled = styled(Box)(({ theme }) => ({
  maxWidth: '90.5rem',
  padding: '1rem 0',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap:' 1rem',

  [theme.breakpoints.up('md')]: {
    padding: '1.5rem',
    flexDirection: 'row',
  }
}));

const ImageStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '12.5rem',
  objectFit: 'none',
  objectPosition: 'center',
  background: gradient1, gradient2, gradient3,

  [theme.breakpoints.up('md')]: {
    maxWidth: '18.75rem',
    height: '18.75rem',
    background: 'none',
  }
})) as typeof Box;

const ProductInfoStyled = styled(Box)(({ theme }) => ({
  padding: '0 1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  letterSpacing: 'inherit',

  [theme.breakpoints.up('md')]: {
    padding: 0,
    gap: '1.313rem',
  }
}));

const ProductAboutStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

const ActionWrapperStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  gap: '0.875rem',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'inherit',
    alignItems: 'center',
  },

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center',
  }
}));

const BtnWrapperStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '0.875rem',

  '& .MuiCheckbox-root': {
    alignSelf: 'center',
    marginTop: '0.375rem'
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row-reverse',

    '& .MuiCheckbox-root': {
      marginTop: 0
    },
  },

  [theme.breakpoints.down('xs')]: {
    flexDirection: 'column-reverse',
  },
}));

export {
  ProductDetailsStyled,
  BtnWrapperStyled,
  ActionWrapperStyled,
  ProductAboutStyled,
  ProductInfoStyled,
  ImageStyled
}