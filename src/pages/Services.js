import { CardContent, Typography } from "@mui/material";
import React from "react";
import MainCard from "../components/ui/MainCard";
export default function Services() {
  const headerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "#330e62",
  };

  return (
    <>
      {" "}
      <MainCard>
        <CardContent sx={headerStyles}>
          <Typography variant="h4"> Services</Typography>
        </CardContent>
        <CardContent>
          Website Design & Development, Website maintenance, custom QR codes,
          5-10 year custom domain name registration
        </CardContent>
      </MainCard>
    </>
  );
}
