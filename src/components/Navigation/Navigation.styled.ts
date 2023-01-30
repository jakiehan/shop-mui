import { styled, IconButton, Box } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const NavigationStyled = styled(Box)(({ theme }) => ({
  display: 'flex'
}));

export { NavigationStyled, IconButton, ShoppingCartOutlinedIcon, AccountCircleOutlinedIcon }