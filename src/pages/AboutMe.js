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
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Container
        sx={{
          maxWidth: 680,
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          marginBottom: 4,
        }}
      >
        <Card>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4" color="#330e62">
                  {" "}
                  About Me{" "}
                </Typography>
              </div>
              <CardMedia
                sx={{ maxWidth: 300, maxHeight: 300, borderRadius: 50 }}
                component="img"
                image={Santiago}
              />
            </CardContent>
          </div>
          <CardContent>
            <Typography variant="body1">
              {" "}
              Hey! My name is Mel and I'm from Phoenix, Arizona. There's a lot
              to me so it's hard to narrow it down in a short bio, but I'll give
              it my best shot. I have a variety of interests such as traveling,
              fashion, cooking and art. I really enjoy programming and creating
              applications as well. I never thought that I would be the type of
              person to like programming this much but once I found it I was
              hooked. I feel so lucky knowing I'll be able to make a career out
              of this. They say if you do what you love you'll never work a day
              in your life so I hope I'll find that statement to be true. I love
              programming because I like being able to have an idea in my head
              and make it into something real. Having it running in front of my
              computer screen makes me feel like a wizard. I am barely at the
              beginning of my developer journey and it excites me knowing
              there's still so much left to learn ahead!{" "}
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", width: 800, gap: 7 }}
        >
          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="320"
              width="300"
              image={Alcala}
            />
            <Typography variant="subtitle1">
              {" "}
              Alcala de Henares, España{" "}
            </Typography>
          </Card>

          <Card sx={{ width: 345 }}>
            <CardMedia
              component="img"
              height="320"
              width="300"
              image={Sicilia}
            />
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
    </Container>
  );
}
