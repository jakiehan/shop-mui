import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)(({ theme}) => ({
  minWidth: 'inherit',
  width: '2.5rem',
  padding: 0,
  fontSize: '1.375rem',

  '&:hover': {
    opacity: .5
  }
})) as typeof Button;