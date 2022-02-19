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
import BottomNavigationLabel from "../components/navigation/BottomNavigation";
export default function Services() {
  const headerStyles = {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    color: "#330e62",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    margin: 2,
    borderRadius: 4,
  };

  return (
    <>
      {" "}
      <MainCard>
        <CardContent sx={headerStyles}>
          <Typography variant="h4"> Services</Typography>
        </CardContent>
        <CardContent>
          <Accordion>
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
                choosing a design for your site to fit your business' particular
                needs. After we've settled on a design I'll work on creating
                everything using the best development tools for your project.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2"
              id="panel2"
            >
              <Typography>Website Maintenance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The web is always changing with new practices being introduced
                everyday. Whether it's updating technological practices or
                updating content, I can ensure everything on your website stays
                up to date and is working smoothly.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3"
              id="panel3"
            >
              <Typography>Domain name registration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Your website wouldn't be complete without a custom domain name.
                I'll do all the work have your site hosted online at a domain
                that's associated with your business.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4"
              id="panel4"
            >
              <Typography>Custom QR Code</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Gone are the days where you manually input a website name. In
                todays world your website wouldn't be complete without a QR code
                that'll allow users to go directly to your site.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
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
                visibility with SEO optimization.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </MainCard>
      <BottomNavigationLabel />
    </>
  );
}
