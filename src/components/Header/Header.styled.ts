import { styled, AppBar, Toolbar } from "@mui/material";

const HeaderStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none'
}))

const ContainerStyled = styled(Toolbar)(({ theme }) => ({
  maxWidth:'90.5rem',
  width: '100%',
  margin: '0 auto',
  padding: '1rem 1.5rem 0',
  justifyContent: 'space-between',
}));

export { HeaderStyled, ContainerStyled }
