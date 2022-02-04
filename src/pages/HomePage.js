import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Retiro from "../assets/Retiro.png";

export default function HomePage() {
  return (
    <Container sx={{ maxWidth: 700 }}>
      <Card
        sx={{
          borderRadius: 5,
          boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
        }}
      >
        <CardContent>
          <CardMedia
            sx={{
              maxHeight: 400,
              borderRadius: 5,
              boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.5)",
            }}
            component="img"
            image={Retiro}
          />
        </CardContent>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" color="#330e62">
              Mel Incögnito
            </Typography>
          </div>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            Welcome to my personal page! I made this site from scratch using
            React.JS and Material-UI! It's pretty simple now but I'll continue
            growing and expanding this webpage as I go through my developer
            journey. Feel free to look around and check back every now and again
            to see any updates to the site!{" "}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            {" "}
            You can click on the top tabs to read a little about me, see a
            little of my CV and read about my journey as a self-taught
            developer! Hope you enjoy!😊
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
