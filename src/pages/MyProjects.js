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
              experience in web development but I'm very eager to learn and
              apply best practices. Thus far, I've made many websites with
              WordPress and Adobe Portfolio but I didn't feel like I was getting
              level of customization I wanted only being able to build
              everything from an online platform. I started to make this site
              from scratch with React to really learn all the nuts and bolts of
              programming! I plan to continue building and maintaining sites so
              I can learn to develop reliable web applications. Once I become
              more advanced with ReactJS I plan to learn to develop reliable
              mobile applications with React Native.
            </Typography>
          </CardContent>

          <CardContent>
            <Typography>
              Here's a small list of the websites I've created or maintained:
              <ul>
                {" "}
                <li>
                  <Link
                    href="https://www.adventuringavocado.com"
                    target="_blank"
                  >
                    www.adventuringavocado.com
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="http://tmg-construction.com/" target="_blank">
                    www.tmg-construction.com
                  </Link>
                </li>
              </ul>
            </Typography>
          </CardContent>
          <CardContent>
            {" "}
            <Typography variant="body1">
              {" "}
              I know the list is small but I know my passion will allow me to
              progress forward quickly. My goal by the end of 2022 is to develop
              at least three large scale applications in my portfolio using
              React!
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="body1">
              Feel free to check out my{" "}
              <Link href="https://www.github.com/melxincognito" target="_blank">
                Github
              </Link>{" "}
              if you're interested to see code from my past projects!
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Container>
  );
}
