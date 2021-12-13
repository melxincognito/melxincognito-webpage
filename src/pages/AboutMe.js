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
import Bellichi from "../assets/Bellichi.png";
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
          maxWidth: 690,
          display: "flex",
        }}
      >
        <Card>
          <CardActionArea
            sx={{
              maxWidth: 690,
            }}
          >
            <Typography variant="h3"> Hey, I'm Mel! </Typography>
            <Typography variant="h6">
              {" "}
              Thanks for taking a peek at my site! There's not much now, I'm
              just getting started on my web development journey. I hope that
              with time I'll be able to grow and expand this site in many
              different forms. Add new features, pages and themes for
              customization. Feel free to check back every now and again, there
              will probably be thousands of frequent updates and changes as I go
              through my web development journey!{" "}
            </Typography>
          </CardActionArea>
        </Card>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap", width: 800 }}>
        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Alcala} />
          <Typography variant="subtitle1">
            {" "}
            Alcala de Henares, España{" "}
          </Typography>
        </Card>

        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Sicilia} />
          <Typography variant="subtitle1"> Sicilia, Italia </Typography>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardMedia component="img" height="320" width="300" image={Tetas} />
          <Typography variant="subtitle1"> Madrid, España </Typography>
        </Card>
        <Card sx={{ width: 345 }}>
          <CardMedia
            component="img"
            height="320"
            width="300"
            image={Bellichi}
          />
          <Typography variant="subtitle1"> Bellichi </Typography>
        </Card>
      </Container>
    </Container>
  );
}
