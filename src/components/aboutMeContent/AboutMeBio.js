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
    marginTop: 4,
  };

  const centerDivStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const headerStyles = {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    width: "auto",
  };

  const headerStyles2 = {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    overflow: "hidden",
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
    <MainCard BackgroundColor="secondary.dark">
      <CardContent sx={headerStyles}>
        <CardContent sx={headerStyles2}>
          <Typography variant="h4" color="secondary.main">
            {" "}
            About Me{" "}
          </Typography>
        </CardContent>
        <div style={centerDivStyle}>
          <CardMedia sx={cardMediaStyle} component="img" image={Santiago} />
        </div>
      </CardContent>

      <CardContent sx={whitebgColor}>
        <CardContent>
          <Typography variant="body1">
            {" "}
            Hey! My name is Mel and I'm from Arizona. There's a lot to me so
            it's hard to narrow it down in a short bio but I'll give it my best
            shot. I have a variety of interests such as traveling, fashion,
            cooking and art. When I was 19 years old I moved to Spain and was
            able to live in Barcelona and Madrid for a few years working as an
            English Teacher and as a Customer Success Manager at a company
            specializing in food traceability using blockchain technologies.{" "}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            I really enjoy programming and creating applications, I feel so
            lucky being able to have a career doing something I love. They say
            if you do what you love you'll never work a day in your life & so
            far I have found this to be true.
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            Feel free to reach out by sending me a message using my contact
            form!
          </Typography>
        </CardContent>
      </CardContent>
    </MainCard>
  );
}
