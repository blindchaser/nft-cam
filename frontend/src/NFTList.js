import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import TryInAR from "./TryInAR";
import { UserContext } from "./LoginContext";
import ARCam from "./threejs/ARCam";
import { Link } from "react-router-dom";

const columns = [
  { field: "icon", headerName: "", width: 120 },
  { field: "name", headerName: "NAME", width: 120 },
  { field: "collection", headerName: "COLLECTION", width: 120 },
  { field: "type", headerName: "TYPE", width: 120 },
  {
    field: "showInAR",
    headerName: "",
    renderCell: (cellValues) => {
      return <Link to="/arcam">AR Cam</Link>;
    },
  },
];

export default function NFTList() {
  const [user] = useContext(UserContext);
  let [rows, updateRows] = useState([]);
  useEffect(() => {
    {
      rows = [];
      if (user.nfts) {
        for (let i = 0; i < user.nfts.length; i++) {
          const info = user.nfts[i];
          updateRows((r) => [
            ...r,
            {
              id: i,
              name: info.name,
              collection: info.asset_contract.name,
              type: info.animation_original_url ? "Animation" : "Still",
            },
          ]);
        }
      } else {
        console.log("user.nfts is undefined");
      }
    }
  }, []);
  return (
    <div style={{ height: 400, width: "60%" }}>
      <Typography variant="h3" align="center" color="white">
        NFT Cam
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        sx={{ color: "white", border: "0px", marginTop: "50px" }}
      />
    </div>
  );
}
