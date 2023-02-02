import { Container, styled } from '@mui/material';

export const ContainerStyled = styled(Container)(({ theme }) => ({
  padding: '1rem 1.5rem'
})) as typeof Container;