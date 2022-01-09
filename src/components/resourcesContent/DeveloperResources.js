import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DeveloperResources() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" color="#330e62">
              {" "}
              Developer Resources{" "}
            </Typography>
          </div>
        </CardContent>
      </div>
      <CardContent>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1"
          >
            <Typography>Code Editors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Theres a bunch of different Code Editors out there like Atom,
              Sublime Text, Vim, VSCode... When I first started I had a bunch of
              different resources recommending one over the other but my
              favorite so far is{" "}
              <Link href="https://code.visualstudio.com/" target="_blank">
                VSCode
              </Link>
              . It comes with a lot of built in features and available
              extensions you can start discovering and learning how to use as
              you go along. There's a lot to it so if you're new don't worry
              about understanding everything at once!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2"
          >
            <Typography>Design & Styling Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ol>
                <li>
                  {" "}
                  <Link href="https://unsplash.com/" target="_blank">
                    Unsplash
                  </Link>
                </li>
                <ul>
                  <li>
                    {" "}
                    Unsplash is a good resource for high quality pictures that
                    are free for others to use.{" "}
                  </li>
                </ul>
                <li>
                  {" "}
                  <Link href="https://mui.com/" target="_blank">
                    Material-UI
                  </Link>{" "}
                </li>
                <ul>
                  <li>
                    Material-UI is my favorite styling library for React! I
                    followed along with{" "}
                    <Link
                      href="https://www.youtube.com/watch?v=EyqpbNgrW3o&t=994s"
                      target="_blank"
                    >
                      this
                    </Link>{" "}
                    Youtube video to help walk me through the basics before I
                    started playing around with everything on my own.
                  </li>
                  <li>
                    {" "}
                    It's not clear on the documentation all the packages you
                    need to install using npm/yarn for everything to work. Don't
                    bother installing the one package listed on the front web
                    page. The packages you need to install are:
                    <ul>
                      {" "}
                      <li>
                        @mui/material @emotion/react @emotion/styled @mui/styles
                        @mui/icons-material{" "}
                      </li>
                    </ul>
                    If you follow these links to the{" "}
                    <Link
                      href="https://mui.com/getting-started/installation/"
                      target="_blank"
                    >
                      Installation,
                    </Link>{" "}
                    <Link href="https://mui.com/styles/basics/" target="_blank">
                      Styles
                    </Link>{" "}
                    &{" "}
                    <Link
                      href="https://mui.com/components/icons/"
                      target="_blank"
                    >
                      Icons
                    </Link>{" "}
                    pages you can see all the packages you need in the
                    documentation.
                  </li>
                </ul>
                <li>
                  <Link href="https://getbootstrap.com/" target="_blank">
                    Bootstrap
                  </Link>
                </li>
                <ul>
                  {" "}
                  <li>
                    This is another popular styling library. It's probably the
                    most commonly used by employers so it's good to get familiar
                    with. I used it for a bit before I found out about
                    Material-UI. I used{" "}
                    <Link
                      href="https://www.youtube.com/watch?v=8pKjULHzs0s"
                      target="_blank"
                    >
                      this
                    </Link>{" "}
                    Youtube video for a walkthrough of the basics.
                  </li>
                </ul>
                <li>
                  <Link href="https://www.hexcolortool.com/" target="_blank">
                    Hex Color Tool
                  </Link>{" "}
                </li>
                <ul>
                  <li>
                    I'm very particular about the shades of a color I need. I
                    like this site because you can play around with the
                    different gradients, opacities, lightness, etc. It gives you
                    the color codes you need in different formats and you have
                    the ability to save shades you use to a pallet on the site.{" "}
                  </li>
                </ul>
                <li>
                  <Link href="https://colorhunt.co/" target="_blank">
                    Colorhunt
                  </Link>{" "}
                </li>
                <ul>
                  <li>
                    My favorite color palett picker. Sometimes it's difficult to
                    know which colors will flow well with one another. This site
                    combines colors that compliment one another while also
                    providing you the color codes needed. It also has different
                    themes you can search through like wedding, vintage, nature,
                    light, dark, etc.{" "}
                  </li>
                </ul>
              </ol>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel3"
          >
            <Typography>Twitter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Tech Twitter is a really good networking resource for developers.
              I've found it to be a very supportive community with a lot of
              useful resources. There's a lot of people on there willing to help
              others break into tech by taking the time out of their days to
              speak on twitter spaces with useful advice, do portfolio/resume
              reviews, create content with tips, etc. You get the most out of it
              if you're willing to learn publicly and aren't afraid to interact
              with people. I personally believe you won't get anywhere if nobody
              knows you exist. I'll be updating this list as I go along, but
              some good accounts to follow are:
              <ul>
                <li>@prathkum</li>
                <li>@DThompsonDev</li>
                <li>@shashiwhocodes</li>
                <li>@VittoStack</li>
                <li>@eddiejaoude</li>
                <li>@oliverjumpertz</li>
                <li>@palashv2</li>
                <li>@denicmarko</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
