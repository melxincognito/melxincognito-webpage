import React from "react";
import { Paper, Typography } from "@mui/material";

export default function BottomNavigationLabel() {
  return (
    <div>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          color: "white",
          bgcolor: "#482880",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
        elevation={5}
      >
        {" "}
        <Typography>
          {" "}
          © 2022 - melxincögnito | All Rights Reserved | Designed by Mel
          Incögnito{" "}
        </Typography>
      </Paper>
    </div>
  );
}
