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
import { useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& .MuiFilledInput-input": {
    color: "#303030",
    backgroundColor: "white",
    borderColor: "#303030",
    borderRadius: 6,
  },
});

export default function Home() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");

  const [account, setAccount] = useState(); // state variable to set account.
  const [nfts, setNfts] = useState(); // state variable to set account.
  const requestAssets = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const accounts = await web3.eth.requestAccounts();
    console.log(accounts);
    setAccount(accounts[0]);
    const reqUrl =
      "https://testnets-api.opensea.io/api/v1/assets?format=json&owner=" +
      accounts[0];
    console.log(reqUrl);
    const response = await axios.get(reqUrl);
    setNfts(response);
    console.log(response);
  };

  const handleTextFieldChange = (e) => {
    setUserInput(e.target.value);
  };

  const tryInAR = async () => {
    // Validate the user input looks like a gltf link.
    if (userInput.includes("opensea.io/assets/0x")) {
      console.log("User input URL looks good");
      let reqUrlPrefix = userInput.includes("testnets.opensea.io")
        ? "https://testnets-api.opensea.io/api/v1/asset/"
        : "https://api.opensea.io/api/v1/asset/";
      const reqUrl = reqUrlPrefix + userInput.split("/assets/")[1];
      console.log(reqUrl);
      const response = await axios.get(reqUrl);
      console.log(response);
      if (response.data.animation_url && response.data.animation_url.endsWith("gltf")) {
        // TODO: Pass this animation_url to THREE.js scene.
      } else {
        console.log("Asset is not GLTF and cannot be used in 3D animation!");
      }
    } else {
      console.log("URL does not look like an OpenSea NFT!");
    }
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
            onChange={handleTextFieldChange}
          />
        </Box>
        <button onClick={tryInAR}>Try in AR</button>
      </Box>
      <Typography variant="body1" align="center" color="white" mt={1} mb={1}>
        Or
      </Typography>
      <ConnectWallet />
      <button onClick={requestAssets}>Request Assets</button>
      <button
        onClick={() => {
          navigate("/nftlist");
        }}
      >
        NFT List
      </button>
      <div>Your account is: {account}</div>
      <div>Your nfts are: {JSON.stringify(nfts)}</div>
    </div>
  );
}
