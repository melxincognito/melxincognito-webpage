import React from "react";
import {
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MainCard from "../components/ui/MainCard";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";

export default function Services() {
  const headerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "secondary.main",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: 2,
    borderRadius: "4px 25px 4px 25px",
    bgcolor: "rgba(255, 255, 255, 0.39)",
    marginTop: 4,
  };

  const requestQuoteDivStyles = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
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
          <CardContent sx={headerStyles}>
            <Typography variant="h4"> Services</Typography>
          </CardContent>
          <CardContent>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1"
                id="panel1"
              >
                <Typography>Website Design & Development </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I work with my clients from start to finish. We'll start with
                  choosing a design for your site to fit your business'
                  particular needs. After we've settled on a design I'll work on
                  creating everything using the best development tools for your
                  project.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2"
                id="panel2"
              >
                <Typography>Website Maintenance</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I can happily provide website maintenance services to those
                  who prefer to have someone else take care of their site for
                  them.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3"
                id="panel3"
              >
                <Typography>Domain name registration</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your website wouldn't be complete without a custom domain
                  name. I'll do all the work have your site hosted online at a
                  domain that's associated with your business.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4"
                id="panel4"
              >
                <Typography>Custom QR Code</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Your website wouldn't be complete without a QR code that'll
                  allow users to go directly to your site with a point of a
                  camera.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5"
                id="panel5"
              >
                <Typography>SEO Optimization</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Get the most out of your website and increase your business
                  visibility by using SEO optimization.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </MainCard>
        <div style={requestQuoteDivStyles}>
          <Typography color="tercera.light">
            {" "}
            To request a quote, send a message via Facebook Messenger{" "}
          </Typography>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
