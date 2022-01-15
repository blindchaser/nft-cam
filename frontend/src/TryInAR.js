import React from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)({
  color: '#303030',
  height: '55px',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  backgroundColor: '#ffd500',
  borderColor: '#303030',
  '&:hover': {
    backgroundColor: '#f5d500',
  },
  '&:active': {
    backgroundColor: '#f5d500',
  },
});

export default function TryInAR() {
  return (
    <StyledButton variant="contained">Try in AR</StyledButton>
  );
}