import React from "react";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import TryInAR from "./TryInAR";

const columns = [
  { field: "icon", headerName: "", width: 120 },
  { field: "name", headerName: "NAME", width: 120 },
  { field: "collection", headerName: "COLLECTION", width: 120 },
  { field: "type", headerName: "TYPE", width: 120 },
  {
    field: "showInAR", headerName: "",
    renderCell: (cellValues) => {
      return (
        <TryInAR />
      );
    },
  },
];

var rows = [
  { id: 1, name: "Pirate SeaDog", collection: "SANDBOX", type: "GLTF" },
  { id: 2, name: "Pirate SeaDog", collection: "Axie Infinity", type: "PNG" },
];

export default function NFTList() {
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
