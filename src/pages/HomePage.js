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
      <Card>
        <CardContent>
          <CardMedia
            sx={{ maxHeight: 300, maxWidth: 690 }}
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
            React.JS and Material-UI! You'll find a bit of everything here and
            there. Feel free to look around and check back every now and again
            to see any updates to the site. It's pretty simple for now but I'll
            continue growing and expanding this webpage as I go through my
            developer journey.{" "}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            {" "}
            You can click on the top tabs to read a little about me, see some of
            my projects and read about my journey as a self-taught developer!
            Hope you enjoy, feel free to use the contact form to leave any
            comments or feedback about my site!😊
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
