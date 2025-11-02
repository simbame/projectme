import React from "react";
import { Button } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Page() {
  return (
    <div className="flex items-center justify-between px-36 py-9">
      <p>All Transactions</p>
      <div>
        <Button variant="contained" color="success">
          <ArrowDownwardIcon /> Download latest Statement
        </Button>
      </div>
    </div>
  );
}
