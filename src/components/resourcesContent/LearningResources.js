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

export default function LearningResources() {
  return (
    <Card sx={{ borderRadius: 5 }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" color="#330e62">
              {" "}
              Learning Resources{" "}
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
            <Typography>Computer Science</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  <Link
                    href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                    target="_blank"
                  >
                    Harvards CS50 Intro to Computer Science{" "}
                  </Link>{" "}
                  course is great for learning about Computer Science. The best
                  part is it's 100% free. It's a full on computer science course
                  from Harvard so it does actually require a good amount of
                  effort to get through but the content is great and the
                  professor is good at clearly explaining the fundamentals. I
                  dont think it's necessary but I'm glad I took the course
                  because I learned a lot of useful information through it.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2"
          >
            <Typography>Web Development</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  My top fav,{" "}
                  <Link href="https://www.theodinproject.com/" target="_blank">
                    The Odin Project
                  </Link>
                  . The Odin Project is a free full stack curriculum supported
                  by an open source community. They literally set up an entire
                  path for getting started in web development, compiled all the
                  best free resources to use and present it in logical order.
                  There is a TON of useful content on there and it was perfect
                  for my learning style because I was learning by doing. No one
                  is holding your hand either so you have to learn how to build
                  the projects and use the tools on your own. You can learn a
                  lot on odin, the only catch is you have to be willing to do
                  it!
                </li>
                <li>
                  <Link href="https://www.codecademy.com/" target="_blank">
                    Codecademy
                  </Link>{" "}
                  is good for someone who's just starting out in programming.
                  It's a hand holding platform but that's not a bad thing for a
                  beginner because programming isn't something that's very
                  intuititive. I dont use it too much anymore, I only use it
                  when I want to get a basic feel of the syntax for a new
                  language to see if it's something I want to work with or not.
                  I don't think it'll help anyone become a highly skilled
                  programmer but it's able to give someone a chance to find the
                  path that works for them with no risk involved.{" "}
                </li>
                <li>
                  <Link href="https://www.freecodecamp.org/" target="_blank">
                    Free Code Camp
                  </Link>{" "}
                  is also a great resource and they come with verified
                  certifications if you complete the tracks. They have a lot of
                  different learning tracks to choose from so it's not just
                  stricly Web Development. There is also courses on Data
                  Visualization, Machine Learning with Python, Data Analysis
                  with Python, Quality Assurance, etc.. I plan to complete the
                  Data Analysis and Machine Learning with Python later but for
                  now I am focusing stricly on Web Development so I'm not
                  diverting my attention to too many areas at once.{" "}
                </li>
                <li>
                  <Link href="https://www.w3schools.com/" target="_blank">
                    W3Schools
                  </Link>{" "}
                  is also really good for referencing things. I used it a lot
                  for CSS and JavaScript References. I like it because it's
                  pretty straight forward explaining things, no extra fluff.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}