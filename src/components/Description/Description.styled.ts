import { styled, Typography } from '@mui/material';

const TitleStyled = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isSubtitle",
})<{
  isSubtitle?: boolean;
  component: string
}>(({ theme, isSubtitle }) => ({
  fontWeight: 700,
  fontSize: isSubtitle ? '1.125rem' : '1.5rem',
  lineHeight: '1.17em',
  letterSpacing: 'inherit',

  [theme.breakpoints.up('md')]: {
    marginTop: isSubtitle ? '0.5rem' : 0,
  }
}));

const ParagraphStyled = styled(Typography)(({ theme}) => ({
  fontSize: '0.875rem',
  lineHeight: '1.14em',
  letterSpacing: 'inherit'
}));

export { TitleStyled, ParagraphStyled }