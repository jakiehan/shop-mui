import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)(({ theme }) => ({
  width: '10rem',
  height: '2.63rem',
  padding: 0,
  fontSize: '1.38rem',
  textTransform: 'none',
  borderRadius: '0.63rem',
  backgroundColor: theme.palette.secondary.main,

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    opacity: .5
  }
})) as typeof Button;