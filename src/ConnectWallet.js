import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  color: '#ffd500',
  height: '55px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  backgroundColor: '#303030',
  borderColor: '#ffd500',
  border: '1px solid',
  '&:hover': {
    backgroundColor: '#a6a6a6',
  },
  '&:active': {
    backgroundColor: '#a6a6a6',
  },
});

export default function ConnectWallet() {
  return (
    <StyledButton variant="contained">Connect wallet to view your collection</StyledButton>
  );
}