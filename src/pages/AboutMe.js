import React, { Component } from "react";
import AboutMeBio from "../components/aboutMeContent/AboutMeBio";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
export default class AboutMe extends Component {
  render() {
    return (
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.17 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AboutMeBio />
        </motion.div>
      </AnimatePresence>
    );
  }
}
