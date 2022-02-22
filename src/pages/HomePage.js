import { CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import Retiro from "../assets/Retiro.jpg";
import MainCard from "../components/ui/MainCard";

export default function HomePage() {
  const cardMediaStyles = {
    maxHeight: 400,
    borderRadius: 5,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
    position: "sticky",
    marginTop: 4,
  };

  const headerStyles = {
    display: "flex-box",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "auto",
    gap: 10,
  };

  const headerStyles2 = {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    overflow: "hidden",
    width: "auto",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    marginTop: 2,
    bgcolor: "rgba(255, 255, 255, 0.39)",
    borderRadius: "4px 25px 4px 25px",
  };

  const whitebgColor = {
    bgcolor: "rgba(255, 255, 255, 0.39)",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: 2,
    borderRadius: 3,
  };
  return (
    <>
      <MainCard BackgroundColor="secondary.dark">
        <CardContent sx={headerStyles}>
          <CardContent sx={headerStyles2}>
            <Typography variant="h4" color="secondary.main">
              Mel Incögnito
            </Typography>
          </CardContent>
          <CardMedia sx={cardMediaStyles} component="img" image={Retiro} />
        </CardContent>

        <CardContent sx={whitebgColor}>
          <CardContent>
            <Typography variant="body1">
              Welcome to my page! I'm a Software Developer who makes Web
              applications using React.JS and Python. I can also make websites
              on WordPress upon request. I learned how to program applications a
              few years after I graduated from Arizona State University with a
              Bachelors in Business. I utilize my background in both business
              and programming to work with my clients to ensure their sites are
              both high quality and good from a business standpoint.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Click on the top tabs to read a little about me and see the
              services I am able to offer.
            </Typography>
          </CardContent>
        </CardContent>
      </MainCard>
    </>
  );
}
