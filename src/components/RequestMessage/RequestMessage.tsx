import React from 'react';
import { Alert } from '@mui/material';

interface RequestMessageProps {
  msg: string | null
}

export const RequestMessage = ({ msg }: RequestMessageProps) => (
  <Alert severity="error">{msg}</Alert>
);

