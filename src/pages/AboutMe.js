import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import Alcala from "../assets/alcala.png";
import Sicilia from "../assets/Sicilia.png";
import Tetas from "../assets/Tetas.png";
import Bellichi from "../assets/Bellichi.png";
import Santiago from "../assets/Santiago.png";

export default function AboutMe() {
  return (
    <Container
      sx={{
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: 680,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginBottom: 4,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4"> About Me </Typography>
            <CardMedia
              sx={{ maxWidth: 300, maxHeight: 300, borderRadius: 50 }}
              component="img"
              image={Santiago}
            />
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Hey! My name is Mel and I'm from Phoenix, Arizona. I have a
              variety of interests such as traveling, fashion, cooking and art.
              I hardly knew how to use an iPhone about a year ago so I never
              thought I would ever be into programming, but once I found it I
              was hooked. I really enjoy that I can have an idea in my head and
              create it from absolutely nothing right in front of my computer
              screen. It makes me feel like a wizard.{" "}
            </Typography>
          </CardContent>
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
