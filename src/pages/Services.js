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
                <Typography>Web App Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I work with my clients from start to finish. We'll start by
                  going over your business' particular needs in order to decide
                  on the best design and development tools needed to create a
                  high quality application that is able to provide additional
                  value to your business. Pricing is dependent on the scale of
                  the web application and includes a 5 year custom domain name
                  registration.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ bgcolor: "secondary.dark" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2"
                id="panel2"
              >
                <Typography>Mobile App Development</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  I work with my clients from start to finish. We'll start by
                  going over your business' particular needs in order to decide
                  on the best design and development tools needed to create a
                  high quality application that is able to provide additional
                  value to your business. Mobile Apps will be able to run on
                  both iPhone and Android.
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
                  Most people agree QR codes make reaching a web page a lot
                  easier, your app wouldn't be complete without a QR code
                  that'll allow users to go directly to your site with a point
                  of a camera. I will do the extra step of making sure your QR
                  code is scaled to the perfect size so whether you want to
                  place them on business cards, products, stickers or
                  advertising materials it will look crisp and professional.
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
                  Gain more user traffic to your web application by using SEO
                  Optimization. I'll do all the tricks under the hood to help
                  your application gain more traction by search engines.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </MainCard>
        <div style={requestQuoteDivStyles}>
          <Typography color="tercera.light">
            {" "}
            Send a message using my contact form to ask any questions or to
            request a quote{" "}
          </Typography>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
