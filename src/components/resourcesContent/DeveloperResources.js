import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DeveloperResources() {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardContent>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4" color="#330e62">
              {" "}
              Developer Resources{" "}
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
            <Typography>Code Editors</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Theres a few different Code Editors out there, I tried out a few
              but my favorite is VSCode. It comes with a lot of built in
              features and extensions you can start discovering and learning how
              to use little by little.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2"
          >
            <Typography>Design & Styling Resources</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li> Unsplash </li>
                <li> Material UI</li>
                <li> Bootstrap </li>
                <li> Hex Color Tool </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
