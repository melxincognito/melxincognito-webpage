import React from "react";
import {
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainCard from "../ui/MainCard";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function LearningResources() {
  const centerDisplayStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <MainCard BackgroundColor="secondary.dark">
          <div style={centerDisplayStyles}>
            <CardContent>
              <div style={centerDisplayStyles}>
                <Typography variant="h4" color="#330e62">
                  {" "}
                  Learning Resources{" "}
                </Typography>
              </div>
            </CardContent>
          </div>
          <CardContent>
            {accordionItemsLearningResources.map((item) => (
              <Accordion key={item.index} sx={{ bgcolor: "secondary.dark" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  id={item.index}
                >
                  <Typography> {item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  >
                    {/* dangerouslySetInnerHTML so the HTML will render instead of plain text */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </MainCard>
      </motion.div>
    </AnimatePresence>
  );
}

const accordionItemsLearningResources = [
  {
    index: 0,
    title: "Computer Science",
    description: `
    <ul>
    <li>
      <a
        href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        target="_blank"
      >
        Harvards CS50 Intro to Computer Science</a>
      course is great for learning about Computer Science. The
      best part is it's 100% free. It's a full on computer
      science course from Harvard so it does actually require a
      good amount of effort to get through but the content is
      great and the professor is good at clearly explaining the
      fundamentals. While it's not completely necessary to take this course I'm glad I 
      did because I learned a lot of useful information through it.
    </li>
  </ul>
    `,
  },
  {
    index: 1,
    title: "Web Development",
    description: `
    <ul>
    <li>
      My top favorite,
      <a
        href="https://www.theodinproject.com/"
        target="_blank"
      >
        The Odin Project</a>
      . The Odin Project is a free full stack curriculum
      supported by an open source community. They set
      up an entire path for getting started in web development by
      compiling all the best free resources to use and present it
      in a logical order. There is a TON of useful content on
      there and it was perfect for my learning style because I
      was learning by doing. No one is holding your hand either
      so you have to learn how to build the projects and use the
      tools on your own. You can learn a lot on The Odin Project, the only
      catch is you have to be willing to do it!
    </li>
    <li>
      <a
        href="https://scrimba.com/dashboard"
        target="_blank"
      >
        Scrimba</a>
      is my second favorite teaching platform where you can learn from
      interactive tutorials and projects, they even come with
      certificates if you complete everything in a course.
      There's free courses on there for beginners but I think the paid subscription 
      is worth it since there's a lot of different content
      for beginners, intermediate and advanced
      developers.
    </li>
    <li>
    <a
      href="https://www.pluralsight.com/"
      target="_blank"
    >
      Pluralsight</a>
    is a paid subscription platform that's a little on the higher end but I have found
    this to be a good investment as a developer. They have a lot of different video training 
    courses for developers for many different paths, not just web development. They have
    courses for Software Development, IT Ops, AI & Machine Learning, Security and much more. They also
    have certifications for different paths such as AWS, Azure, Google Cloud, Agile Project Management, etc. 
  </li>
    <li>
      <a href="https://www.codecademy.com/" target="_blank">
        Codecademy</a>
      is good for someone who's just starting out in
      programming. It's a hand holding platform but that's not a
      bad thing for a beginner because programming isn't
      something that's very intuitive. I don't use it too much
      anymore, I only use it when I want to get a basic feel of
      the syntax for a new language to see if it's something I
      want to work with or not. I don't think it'll help anyone
      become a highly skilled programmer but it's able to give
      someone a chance to find the path that works for them with
      no risk involved.
    </li>
    <li>
      <a
        href="https://www.freecodecamp.org/"
        target="_blank"
      >
        Free Code Camp</a>
      is also a great resource and they come with verified
      certifications if you complete the tracks. They have a lot
      of different learning tracks to choose from so it's not
      just strictly Web Development. There is also courses on
      Data Visualization, Machine Learning with Python, Data
      Analysis with Python, Quality Assurance, etc.. I plan to
      complete the Data Analysis and Machine Learning with
      Python later but for now I am focusing strictly on Web
      Development so I'm not diverting my attention to too many
      areas at once.
    </li>
    <li>
      <a href="https://www.w3schools.com/" target="_blank">
        W3Schools</a>
      is also really good for referencing things. I used it a
      lot for CSS and JavaScript References. I like it because
      it's pretty straight forward explaining things, no extra
      fluff.
    </li>
    <li>
      <a
        href="https://leetcode.com/explore/"
        target="_blank"
      >
        Leetcode</a>
      is a good resource for coding challenges to practice your
      skills. I see theres a lot of other features like
      interview preps on premium but I've only used it for the
      exercises. Another site I like to use for practice
      problems is
      <a href="https://www.codewars.com/" target="_blank">
        Codewars</a>
      . I don't use it as often as Leetcode but it's still a good
      resource.
    </li>
    <li>
    <a
      href="https://developer.mozilla.org/en-US/"
      target="_blank"
    >
      Mozilla Web Docs</a>
    is not recommended for a beginner to rely on because it's pretty detailed but as I've gotten 
    more advanced I've found a lot more useful information about HTML, CSS, JavaScript, Accessibility 
    and WebAPIs in the Mozilla Web Docs than any tutorial could ever give me. I like how it gives me 
    an in-depth explanation on the topic I'm studying and due to this I have 
    a better understanding on a high level of how everything works together. 
  </li>
  </ul>
    `,
  },
];
