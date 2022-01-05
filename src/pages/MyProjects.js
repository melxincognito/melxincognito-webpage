import {
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

export default function MyProjects() {
  return (
    <Container>
      <Card sx={{ borderRadius: 5 }}>
        <CardContent>
          <Typography variant="h4"> My CV</Typography>

          <CardContent>
            <Typography variant="body1">
              {" "}
              <Typography variant="h6"> Overview: </Typography> I've made an
              embarrassing number of websites with WordPress and Adobe Portfolio
              but I didn't feel like I was getting level of customization I
              wanted only being able to build everything from an online
              platform. I started to make this site from scratch with React to
              really learn all the nuts and bolts of web development! I will
              continue building projects as I progress, my goal is to be able to
              develop and maintain large scale web applications.
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

          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Web Development Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Here's a small list of the websites I've created or
                  maintained:
                  <ul>
                    <li>
                      {" "}
                      <Link href="http://tmg-construction.com/" target="_blank">
                        www.tmg-construction.com
                      </Link>
                    </li>
                    <li>www.tgazrealty.com (currently under construction)</li>
                  </ul>
                </Typography>
                <Typography variant="body1">
                  {" "}
                  I know the list is small but my passion will allow me to
                  progress forward quickly. My goal by the end of 2022 is to
                  develop at least 2 large scale applications in my portfolio
                  using React!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Professional Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      {" "}
                      Accounting Specialist - Maricopa County - Phoenix, USA
                    </li>
                    <li>
                      {" "}
                      Project Manager - TMG Construction LLC - Phoenix, USA
                    </li>
                    <li>
                      {" "}
                      Customer Success Manager - RetraceIt Technologies -
                      Madrid, ES{" "}
                    </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Other Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li>
                      {" "}
                      English Teaching Assistant - Ministerio de Educación,
                      Cultura y Deporte - Madrid, ES
                    </li>
                    <li> Private English Teacher - Freelance - Madrid, ES </li>
                    <li> Bookkeeper - TMG Construction LLC - REMOTE </li>
                    <li> Waitress - Various </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Hobbies</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <ul>
                    <li> Cooking </li>
                    <li> Tattooing oranges </li>
                    <li> Digital Art </li>
                    <li> Solo Travel </li>

                    <li> Photography </li>
                    <li> Programming </li>
                    <li> Learning new languages </li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </CardContent>
      </Card>
    </Container>
  );
}
