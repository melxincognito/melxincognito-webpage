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
  };

  const centerDivStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <MainCard BackgroundColor="secondary.dark">
        <CardContent>
          <CardMedia sx={cardMediaStyles} component="img" image={Retiro} />
        </CardContent>
        <CardContent>
          <div style={centerDivStyles}>
            <Typography variant="h4" color="secondary.main">
              Mel Incögnito
            </Typography>
          </div>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            Welcome to my page! I'm a Software Developer who makes Web
            applications using React.JS and Python. I learned how to program
            applications a few years after I graduated from Arizona State
            University with a Bachelors in Business Law. I utilize my background
            in both business and programming to work with my clients to ensure
            their applications are both high quality and good from a marketing
            standpoint.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            {" "}
            Feel free to take a look around to find out more! You can click on
            the top tabs to read a little about me, see the services I am able
            to offer and request a quote using my contact form.
          </Typography>
        </CardContent>
      </MainCard>
    </>
  );
}
