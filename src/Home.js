import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TryInAR from "./TryInAR";
import ConnectWallet from "./ConnectWallet";

const CssTextField = styled(TextField)({
  "& .MuiFilledInput-input": {
    color: "#303030",
    backgroundColor: "white",
    borderColor: "#303030",
    borderRadius: 6,
  },
});

export default function Home() {
  return (
    <div>
      <Typography variant="h1" align="center" color="white">
        NFT Cam
      </Typography>
      <Typography variant="h5" align="center" color="white">
        Bring your NFTs to AR in one click
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Box
          sx={{
            width: "600px",
            marginRight: "20px",
          }}
        >
          <CssTextField
            id="nft-link-input"
            fullWidth
            label="Enter OpenSea NFT link"
            variant="filled"
          />
        </Box>
        <TryInAR />
      </Box>
      <Typography variant="body1" align="center" color="white" mt={1} mb={1}>
        Or
      </Typography>
      <ConnectWallet />
    </div>
  );
}
