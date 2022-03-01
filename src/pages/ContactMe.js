import React from "react";
import ContactForm from "../components/forms/ContactForm";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function ContactMePage() {
  return (
    <AnimatePresence>
      <motion.div
        transition={{ delay: 0.17 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContactForm />
      </motion.div>
    </AnimatePresence>
  );
}
