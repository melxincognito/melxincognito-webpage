import * as React from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
// form imports MUI
import {
  Card,
  CardContent,
  TextField,
  Typography,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// forms global variables
const servicesOptions = [
  { value: "Web Design & Development", label: "Web Design & Development" },
  { value: "WebMaintenance", label: "Website Maintenance" },
  { value: "Other", label: "Other" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // form functionality variables

  const [open, setOpen] = React.useState(false);

  const [serviceInquiry, setServiceInquiry] = React.useState(
    "Web Design & Development"
  );

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // form functionality functions
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8w10yxm",
        "template_4e06fuy",
        form.current,
        "user_wKGjgdwvgNqEiJyejXWHN"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 5,
    bgcolor: "secondary.dark",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const formTitleDisplayStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const textFieldStyles = {
    margin: "10px 0px",
    bgcolor: "rgba(255, 255, 255, 0.69)",
    borderRadius: 2,
  };

  const submitButtonStyles = {
    gap: 1,
    backgroundColor: "black",
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={formTitleDisplayStyles}>
          <Typography variant="h4"> Contact Me</Typography>
        </CardContent>

        <CardContent>
          <form ref={form} onSubmit={sendEmail}>
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Name"
              id="contactName"
              name="name"
              required
            />
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Phone"
              type="tel"
              id="contactPhone"
              name="phone"
              required
            />
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Email"
              type="email"
              id="contactEmail"
              name="userEmail"
              required
            />
            <TextField
              sx={textFieldStyles}
              id="serviceInquirySelection"
              fullWidth
              select
              label="Service Category"
              value={serviceInquiry}
              onChange={handleServiceChange}
              required
              name="serviceCategory"
            >
              {servicesOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl required>
              <FormLabel id="radio-buttons-group-label">
                Preferred method of contact:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Phone"
                  control={<Radio />}
                  label="Phone Call"
                />
                <FormControlLabel
                  value="Text"
                  control={<Radio />}
                  label="Text"
                />
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label="E-mail"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              fullWidth
              multiline
              sx={textFieldStyles}
              rows={5}
              label="Message"
              id="fullWidth"
              name="message"
              required
            />
            <Button
              variant="contained"
              sx={submitButtonStyles}
              type="submit"
              onClick={handleClickOpen}
            >
              <SendIcon /> Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanks for reaching out!!"}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            I'll get back to you as soon as I can ☺️
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}