import { Container, Card, Typography, CardContent, Link } from "@mui/material";
import React from "react";

export default function MyDevJourney() {
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
          maxWidth: 690,
          display: "flex",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h3"> My Web Development Journey </Typography>
            <Typography variant="h6">
              {" "}
              As a community taught developer, I thought I would take a moment
              to share how I worked to develop the necessary skills on my own.
              The whole process started out a little shakey, but because I
              refused to give up I eventually found the right resources online.
              Initially I wanted to go do some courses at a community college or
              a bootcamp but financial limitations restricted me from utilizing
              these resources. Instead of throwing in the towel I chose to stay
              commited to finding free resources online. So far I have spent a
              total of twenty dollars on web development courses.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              In the beginning I tried to learn coding languages through some
              books, on hand holding platforms like codecademy and free trials
              of paid courses. I wasted about 5 months jumping from resource to
              resource because I didn't know exactly what to look for.{" "}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h6">
              {" "}
              It wasn't until I stumbled upon{" "}
              <Link href="https://www.theodinproject.com/" target="_blank">
                {" "}
                The Odin Project{" "}
              </Link>{" "}
              that I began to make any notable progress. The resources I
              utilized before didn't allow me to progress but I like to see it
              as tools that let me scratch the surface into programming. It took
              me about two months to get through their{" "}
              <Link
                href="https://www.theodinproject.com/paths/foundations/courses/foundations"
                target="_blank"
              >
                {" "}
                Foundations Path{" "}
              </Link>{" "}
              . I didn't have any background in development so I was spending
              about 4-8 hours a day really taking the time to understand and
              apply the material. I learned a lot of useful tools that are
              essential for any developer to have in their toolbox.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
}
