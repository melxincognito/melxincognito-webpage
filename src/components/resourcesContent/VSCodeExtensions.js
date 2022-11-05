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

export default function VSCodeExtensions() {
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
          <div style={centerDisplayStyle}>
            <CardContent>
              <div style={centerDisplayStyle}>
                <Typography variant="h4" color="#330e62">
                  {" "}
                  VS Code Extensions{" "}
                </Typography>
              </div>
            </CardContent>
          </div>
          <CardContent>
            {accordionItemsVSCodeExtensions.map((item) => (
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
                  ></Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </CardContent>
        </MainCard>
      </motion.div>
    </AnimatePresence>
  );
}

const accordionItemsVSCodeExtensions = [
  {
    index: 0,
    title: "Productivity Extensions",
    description: `
    There are a lot of different productivity extensions out
    there, these are just the ones I use on a regular basis
    <ul>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          target="_blank">
          Prettier Code Formatter
        </a>
        is amazing, I don't know how I went so long without this
        extension. It's an opinionated code formatter that formats
        your code so it's easily readable. If your code has an
        error like a missing bracket it won't format on save so
        it's a good cue to take another look at your code before
        you run. When you first download it you have to do a
        special key combo to format it, change the settings so it
        formats on save and it's a lot more useful. To turn
        prettier on and have it format on save:
        <ul>
      
          <li>
            Navigate to <strong>Preferences</strong> >
            <strong> Settings</strong> > Search
            <strong>'format document' </strong>
          </li>
          <li>
            Under <strong> Editor: Default Formatter</strong>,
            click the selector button and select
            <strong> Prettier - Code formatter</strong>
          </li>
          <li>
            Look below and check the box under
            <strong>Editor: Format On Save</strong>
          </li>
        </ul>
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          target="_blank"
        >
          Live Server</a>
        is another good extension. It launches a development
        server with the page you're creating and it reloads live
        with each save so you don't have to keep relaunching every
        time you make a change.
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          target="_blank"
        >
          ES7 React/Redux/GraphQL/React-Native snippits</a>
        is a total time saver. It comes with snippits so you don't
        have to type out commonly used commands like import React
        from 'react', it can make a skeleton of a functional/class
        component, etc. The things that aren't difficult but can
        be tedious.
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=2gua.rainbow-brackets"
          target="_blank"
        >
          Rainbow Brackets</a>
        color codes your round, squiggly and square brackets so it
        stands out from the rest of your code and you can locate
        which bracket goes with which. It saves you a lot of
        trouble, I don't know how many times I spent hours looking
        for the reason my project was crashing only to find I was
        missing a single } 🙃
      </li>
      <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
        target="_blank"
      >
        Code Spell Checker</a>
      will spell check your code and highlight any misspelled words. VS Code doesn't do this automatically 
      so it's easy to have a lot of spelling errors on your webpage without it. This one is for English but 
      there are plenty of spell checkers for different languages such as Spanish, Portuguese, French, Etc. 
    </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag"
          target="_blank"
        >
          Auto rename tag</a>
        automatically renames the paired HTML/XML tag in your code
        editor while you're working.
      </li>
      <li>
      <a
        href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
        target="_blank"
      >
        GitLens</a>
     allows you to quickly check the history of a file so you can see who made changes, when and why. 
    </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=almenon.arepl"
          target="_blank"
        >
          AREPL for Python</a>
        automatically evaluates and gives you a preview of your
        python code as you type.
      </li>
    </ul>
    `,
  },
  {
    index: 1,
    title: "Theme Extensions",
    description: `
    Once I found out you can change the color theme of your code
    editor I wondered how I was looking at the default one for so
    long! You're going to be looking at your editor for hours on
    end so it may as well be appealing to your eyes. There's
    plenty out there so you can look around to see which ones you
    like. I like high contrast themes so I can differentiate the different 
    parts of my code more easily. So far my favorites have
    been:
    <ul>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=PawelBorkar.jellyfish"
          target="_blank"
        >
          JellyFish</a>
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=bpat86.nightcall"
          target="_blank"
        >
          Nightcall</a>
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula"
          target="_blank"
        >
          Dracula Official</a>
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple"
          target="_blank"
        >
          Shades of Purple</a>
      </li>
      <li>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
          target="_blank"
        >
          GitHub Theme - GitHub Dark High Contrast</a>
      </li>
    </ul>
    `,
  },
];
