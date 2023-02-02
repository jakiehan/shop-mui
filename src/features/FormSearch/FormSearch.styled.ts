import { styled, FormControl, Input, InputAdornment, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const FormSearchStyled = styled(FormControl)(({ theme }) => ({
  width: '10.625rem',
  height: '2.5rem',

  [theme.breakpoints.up('md')]: {
    width: '12.5rem'
  }
})) as typeof FormControl;

const InputStyled = styled(Input)(({ theme }) => ({
  '& .MuiInput-input': {
    height: 'auto',
    padding: '0.75rem 0',
    fontSize: '0.875rem',
    lineHeight: '1.14em',
    color: theme.color.darkGrey,

    '&::placeholder': {
      color: theme.color.darkGrey
    },

    '&:-webkit-autofill': {
      webkitBoxShadow: 'inset 0 0 0 50px #fff',
      webkitTextFillColor: theme.color.darkGrey
    }
  },

  '&.Mui-focused': {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,

    svg: {
      fill: theme.palette.secondary.main
    }
  }
}));

export { FormSearchStyled, InputStyled, SearchIcon, InputAdornment }

