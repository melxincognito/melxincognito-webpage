import {
  Container,
  Typography,
  Card,
  CardContent,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import MainCard from "../components/ui/MainCard";

export default function MyProjects() {
  return (
    <Container>
      <MainCard>
        <CardContent>
          <Typography variant="h4"> My CV</Typography>

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
                aria-controls="panel1-content"
                id="panel1"
              >
                <Typography>Web Development Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sites I've created/maintained:
                  <ul>
                    <li>
                      {" "}
                      <Link href="http://tmg-construction.com/" target="_blank">
                        www.tmg-construction.com
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        href="http://links-melxincognito.com/"
                        target="_blank"
                      >
                        www.links-melxincognito.com/
                      </Link>
                    </li>
                    <li>www.tgazrealty.com (currently under construction)</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2"
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
                aria-controls="panel3-content"
                id="panel3"
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
                aria-controls="panel4-content"
                id="panel4"
              >
                <Typography>Languages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" sx={{ gap: 6 }}>
                  <div>
                    <Typography>
                      <p>
                        <strong>Programming Languages</strong>
                      </p>
                      <ul>
                        <li> HTML🖥 </li>
                        <li> CSS🎨 </li>
                        <li> JavaScript🚀 </li>
                        <li> Python🐍 </li>
                      </ul>
                    </Typography>
                  </div>

                  <div>
                    {" "}
                    <Typography>
                      <p>
                        <strong>Spoken Languages</strong>
                      </p>
                      <ul>
                        <li>English</li>
                        <li> Spanish</li>
                      </ul>
                    </Typography>
                  </div>

                  <div>
                    {" "}
                    <Typography>
                      <p>
                        <strong>Frameworks</strong>
                      </p>
                      <ul>
                        <li>React.JS</li>
                      </ul>
                    </Typography>
                  </div>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5-content"
                id="panel5"
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
      </MainCard>
    </Container>
  );
}
