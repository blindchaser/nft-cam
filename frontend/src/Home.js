import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TryInAR from "./TryInAR";
import ConnectWallet from "./ConnectWallet";
import axios from "axios";
import { useEffect, useState } from "react";
import Web3 from "web3";

const CssTextField = styled(TextField)({
  "& .MuiFilledInput-input": {
    color: "#303030",
    backgroundColor: "white",
    borderColor: "#303030",
    borderRadius: 6,
  },
});

export default function Home() {
  const [account, setAccount] = useState(); // state variable to set account.
  const [nfts, setNfts] = useState(); // state variable to set account.
  const requestAssets = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.requestAccounts();
    console.log(accounts);
    setAccount(accounts[0]);
    const reqUrl =
      "https://testnets-api.opensea.io/api/v1/assets?format=json&owner=" + accounts[0];
    console.log(reqUrl);
    const response = await axios.get(reqUrl);
    setNfts(response);
    console.log(response);
  };

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
      <button onClick={requestAssets}>Request Assets</button>
      <div>Your account is: {account}</div>
      <div>Your nfts are: {JSON.stringify(nfts)}</div>
    </div>
  );
}
