import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '6.25rem',
  fontWeight: '400',
  fontSize: '0.938rem',
  lineHeight: '1.338em',
  textTransform: 'none',
  color: theme.color.middleGrey,
  borderColor: theme.color.middleGrey,

  '&:hover': {
    borderColor: theme.color.middleGrey,
    opacity: .7,
  }
}));