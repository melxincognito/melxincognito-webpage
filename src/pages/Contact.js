import { Container, Typography } from "@mui/material";
import React from "react";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <Container>
      <Typography variant="h3">Contact Form</Typography>
      <ContactForm />
    </Container>
  );
}
