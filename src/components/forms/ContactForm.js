import React, { useRef } from "react";
import {
  Typography,
  Box,
  Card,
  TextField,
  Button,
  CardActions,
} from "@mui/material";

export default function ContactForm(props) {
  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const twitterInput = useRef();
  const messageInput = useRef();

  function clickedSendBtn(e) {
    e.preventDefault();

    console.log("hello");
  }

  return (
    <Card
      sx={{
        maxWidth: 350,
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, p: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "grid", justifyContent: "center", gap: 7 }}>
          <Typography variant="h4" color="#330e62">
            Contact Me
          </Typography>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            ref={firstNameInput}
            required
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            ref={lastNameInput}
            required
          />
          <TextField
            id="email"
            label="Contact Email"
            variant="outlined"
            ref={emailInput}
            required
          />
          <TextField
            id="twitter"
            label="Twitter"
            variant="outlined"
            ref={twitterInput}
            required
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            ref={messageInput}
            required
          />
          <CardActions>
            <Button
              variant="outlined"
              color="secondary"
              onClick={clickedSendBtn}
            >
              Send Message
            </Button>
          </CardActions>
        </div>
      </Box>
    </Card>
  );
}
