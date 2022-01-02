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
    <Card>
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
              Theres a few different Code Editors out there. I had a bunch of
              different resources recommending one over the other but my
              favorite is{" "}
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
              <ul>
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
                    Material UI
                  </Link>{" "}
                </li>
                <ul>
                  <li>
                    Material-UI is a GREAT styling library for React! I followed
                    along with{" "}
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
                    It's very clear on the documentation all the packages you
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
                <li> Bootstrap </li>
                <li> Hex Color Tool </li>
              </ul>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
