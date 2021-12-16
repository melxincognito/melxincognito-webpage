import { Container, Typography, Card, CardContent, Link } from "@mui/material";
import React from "react";

export default function MyProjects() {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h4"> My CV</Typography>

          <CardContent>
            <Typography variant="body1">
              {" "}
              <Typography variant="h6"> Overview: </Typography>I don't have much
              experience related directly to web development but I'm very eager
              to learn and apply best practices Thus far, I've made many
              websites with WordPress and was given the opportunity to update
              and maintain a website for a company I was working at. I didn't
              feel like I was getting the experience I wanted only being able to
              work with pre-built sites so I made this site from scratch with
              React to really learn all the nuts and bolts of programming! I
              plan to continue building and maintaining sites so I can learn to
              develop reliable web applications. Once I become more advanced
              with ReactJS I plan to learn to develop reliable mobile
              applications with React Native.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography>
              Here's a small list of the websites I've created or maintained:
              <ul>
                {" "}
                <li>
                  {" "}
                  <Link href="www.tmg-contruction.com" target="_blank">
                    www.tmg-construction.com
                  </Link>
                </li>
                <li>
                  <Link href="www.adventuringavocado.com" target="_blank">
                    www.adventuringavocado.com
                  </Link>
                </li>
              </ul>
            </Typography>
          </CardContent>
          <CardContent></CardContent>
        </CardContent>
      </Card>
    </Container>
  );
}
