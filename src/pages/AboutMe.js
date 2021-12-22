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
                  My Goals for 2022{" "}
                </Typography>
              </div>
            </CardContent>
          </div>
          <CardContent>
            <Typography variant="body1">
              {" "}
              I've lived a lot of adventure being able to travel around the
              globe and live in different places. The adventure isn't over but
              this year is meant to be dedicated to advancing myself in my
              career so I can get to where I really want to be in life while
              being financially secure and, most importantly, happy.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              My top goal for 2022 is landing my first position as a Junior
              Developer. I would love the opportunity to work with senior
              developers so I can learn from them and gain the experience needed
              to become a developer who can not only complete tasks but can also
              provide additional value.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              An additional goals that extend from my top career goal is to
              learn how to create reliable, large scale applications with React,
              both for mobile and web. I plan on continuing on my current path
              of studying React.JS for web applications and focusing on this
              path before I begin with React Native for mobile applications.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              The final goal on my list is related to my health. I would like to
              gain twenty pounds by the end of the year. I am very thin and I
              like the way I look now but I would like to look healthy, full and
              strong. I have a hard time keeping on weight so I plan on spending
              2022 lifting weights to try and gain muscle mass while meal
              planning and tracking my calories to ensure I'm eating enough and
              gaining healthy fats.
            </Typography>
          </CardContent>
          <CardContent>
            <Typography>
              I know my goals will take a lot of hard work and effort to reach
              but with dedication & persistence I know I'll be able to exceed
              them. I hope the path forward isn't too rocky but I know this year
              will be a good adventure.
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
