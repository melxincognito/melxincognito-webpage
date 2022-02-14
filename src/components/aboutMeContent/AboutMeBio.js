import React from "react";
import Santiago from "../../assets/Santiago.png";
import { CardContent, Typography, CardMedia } from "@mui/material";
import MainCard from "../ui/MainCard";

export default function AboutMeBio() {
  const cardMediaStyle = {
    maxWidth: 300,
    maxHeight: 300,
    borderRadius: 40,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.6)",
    marginTop: 2,
  };

  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
  };

  /* const headerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "#330e62",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: 2,
    borderRadius: 4,
  }; */

  return (
    <MainCard>
      <div style={centerDivStyle}>
        <CardContent>
          <div style={centerDivStyle}>
            <Typography variant="h4" color="#330e62">
              {" "}
              About Me{" "}
            </Typography>
          </div>
          <CardMedia sx={cardMediaStyle} component="img" image={Santiago} />
        </CardContent>
      </div>
      <CardContent>
        <Typography variant="body1">
          {" "}
          Hey! My name is Mel and I'm from Arizona. There's a lot to me so it's
          hard to narrow it down in a short bio but I'll give it my best shot. I
          have a variety of interests such as traveling, fashion, cooking and
          art. When I was 19 years old I moved to Spain and was able to live in
          Barcelona and Madrid for a few years working as an English Teacher and
          as a Customer Success Manager at a company specializing in food
          traceability using blockchain technologies. I speak English and
          Spanish but I would like to be able to provide my services to
          customers from all of Latin America so I have been taking classes to
          learn Portuguese as well.{" "}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          I really enjoy programming and creating applications, I feel so lucky
          being able to have a career doing something I love. They say if you do
          what you love you'll never work a day in your life & so far I have
          found this to be true. Currently, I use React.JS and Python to create
          Web Applications. I would like to have the ability to work with
          blockchain technologies in the near future so I have began my journey
          learning how to create applications using Rust.
        </Typography>
      </CardContent>
      <CardContent>
        <Typography>
          I'm always open to working and collaborating with others. Feel free to
          reach out using my contact form or by sending me a direct message via
          Twitter!
        </Typography>
      </CardContent>
    </MainCard>
  );
}
