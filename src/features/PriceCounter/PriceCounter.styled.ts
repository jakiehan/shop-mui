import { Box, Input, styled, Typography } from '@mui/material';

const PriceCounterStyled = styled(Box)(({ theme }) => ({
  gap: '0.875rem',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.down('xs')]: {
    alignItems: 'center',
  }
}));

const PriceStyled = styled(Typography)(({ theme }) => ({
  fontSize: '2.25rem',
  lineHeight: '1.17em',
  textAlign: 'center',
  color: theme.palette.secondary.main,

  [theme.breakpoints.up('md')]: {
    minWidth: '6.25rem'
  },
}));

const CounterStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.color.darkGrey}`
}));

const FieldStyled = styled(Input)(({ theme }) => ({
  '& .MuiInput-input': {
    width: '3.625rem',
    height: '2.375rem',
    padding: 0,
    borderLeft: `1px solid ${theme.color.darkGrey}`,
    borderRight: `1px solid ${theme.color.darkGrey}`,
    fontSize: '1.5rem',
    lineHeight: '1.17em',
    textAlign: 'center',
  }
}));

export { PriceCounterStyled, FieldStyled, CounterStyled, PriceStyled }