import {
  Card,
  CardActionArea,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Alcala from "../assets/alcala.png";
import Sicilia from "../assets/Sicilia.png";
import Tetas from "../assets/Tetas.png";

export default function AboutMe() {
  return (
    <Container
      sx={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Container
        sx={{
          maxWidth: 900,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Card>
          <CardActionArea sx={{ maxWidth: 300 }}>
            <Typography variant="h3"> Hey, I'm Mel! </Typography>
          </CardActionArea>
        </Card>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Alcala} />
          <Typography variant="subtitle1"> img </Typography>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Sicilia} />
          <Typography variant="subtitle1"> img </Typography>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Tetas} />
          <Typography variant="subtitle1"> img </Typography>
        </Card>
        <Card sx={{ width: 345 }}>
          <Typography variant="subtitle1"> img </Typography>
        </Card>
      </Container>
    </Container>
  );
}
