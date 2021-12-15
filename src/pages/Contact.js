import { Container } from "@mui/material";
import React from "react";
import ContactForm from "../components/forms/ContactForm";

export default function Contact() {
  return (
    <Container
      style={{
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ContactForm />
    </Container>
  );
}
