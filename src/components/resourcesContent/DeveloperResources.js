import React from "react";
import {
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainCard from "../ui/MainCard";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function DeveloperResources() {
  const centerDisplayStyle = {
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
          <div>
            <CardContent sx={centerDisplayStyle}>
              <div style={centerDisplayStyle}>
                <Typography variant="h4" color="#330e62">
                  {" "}
                  Developer Resources{" "}
                </Typography>
              </div>
            </CardContent>
          </div>
          <CardContent>
            {accordionItems.map((item) => (
              <Accordion key={item.index} sx={{ bgcolor: "secondary.dark" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
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

const accordionItems = [
  {
    index: 0,
    title: "Code Editors",
    description: `
    Theres a bunch of different Code Editors out there like Atom,
    Sublime Text, Vim, VSCode... When I first started I had a
    bunch of different resources recommending one over the other
    but my favorite so far is
    <a href="https://code.visualstudio.com/" target="_blank">
      VSCode</a> for web development. It comes with a lot of built in features and available
    extensions you can start discovering and learning how to use
    as you go along. There's a lot to it so if you're new don't
    worry about understanding everything at once!
    `,
  },

  {
    index: 1,
    title: "Design & Styling Resources",
    description: `
    <ol>
    <li>
     
      <a href="https://unsplash.com/" target="_blank">
        Unsplash
      </a>
    </li>
    <ul>
      <li>
        Unsplash is a good resource for high quality pictures
        that are free for others to use.
      </li>
    </ul>
    <li>
      <a href="https://mui.com/" target="_blank">
        Material-UI
      </a>
    </li>
    <ul>
      <li>
        Material-UI is my favorite styling library for React! I
        followed along with
        <a
          href="https://www.youtube.com/watch?v=EyqpbNgrW3o&t=994s"
          target="_blank"
        >
          this Youtube video</a>
         to help walk me through the basics before
        I started playing around with everything on my own.
      </li>
      <li>
        It's not clear on the documentation all the packages you
        need to install using npm/yarn for everything to work.
        Don't bother installing the one package listed on the
        front web page. The packages you need to install are:
        <ul>
       
          <li>
            @mui/material @emotion/react @emotion/styled
            @mui/system @mui/icons-material
          </li>
        </ul>
        If you follow these links to the
        <a
          href="https://mui.com/getting-started/installation/"
          target="_blank"
        >
          Installation,
        </a>
        <a
          href="https://mui.com/system/basics/"
          target="_blank"
        >
          MUI System
        </a>
        &
        <a
          href="https://mui.com/components/icons/"
          target="_blank"
        >
          Icons</a>
        pages you can see all the packages you need in the
        documentation.
      </li>
    </ul>
    <li>
      <a href="https://getbootstrap.com/" target="_blank">
        Bootstrap
      </a>
    </li>
    <ul>
      <li>
        This is another popular styling library. It's probably
        the most commonly used by employers so it's good to get
        familiar with. I used it for a bit before I found out
        about Material-UI. I used
        <a
          href="https://www.youtube.com/watch?v=8pKjULHzs0s"
          target="_blank"
        >
          this Youtube video</a>
        for a walk through of the basics.
      </li>
    </ul>
    <li>
      <a
        href="https://www.hexcolortool.com/"
        target="_blank"
      >
        Hex Color Tool
      </a>
    </li>
    <ul>
      <li>
        I'm very particular about the shades of a color I need.
        I like this site because you can play around with the
        different gradients, opacities, lightness, etc. It gives
        you the color codes you need in different formats and
        you have the ability to save shades you use to a pallet
        on the site.
      </li>
    </ul>

    <li>
    <a
      href="https://html-css-js.com/css/generator/box-shadow/"
      target="_blank"
    >
      CSS Box Shadow Generator
    </a>
  </li>
  <ul>
    <li>
     I use this tool very often to help create a starting point for the box shadow I want to use for a specific element. 
     You can play around with how the box shadow is being presented and it gives you the CSS code needed to implement it. 
     After you have a starting point it becomes a lot easier to tweak it so it looks perfect for your web page. 
    </li>
  </ul>
  <li>
  <a
    href="https://imgbox.com/"
    target="_blank"
  >
    ImgBox Photo Hosting
  </a>
</li>
<ul>
  <li>
    There's a lot of websites you can use to host images and have the url link to upload on your 
    img src attribute but I noticed a lot of the free services have a significant drop in the quality of the images 
    once they're uploaded onto their platform. I found imgbox to be a very good alternative to the other free services 
    I've used such as Flickr. It's free to upload images up to 10mb in size, you have the ability to create organized galleries for 
    your photos and there's no quality drop in the images after they've been uploaded.
  </li>
</ul>

  </ol>
    
    `,
  },
];
