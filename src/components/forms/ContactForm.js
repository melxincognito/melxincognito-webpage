import React, { useState, forwardRef, useRef } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// forms global variables

const servicesOptions = [
  {
    value: "Web Application Development",
    label: "Web Application Development",
  },
  {
    value: "Mobile Application Development",
    label: "Mobile Application Development",
  },
  { value: "Other", label: "Other" },
];

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
}

// transition for message sent confirmation popup
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // message sent confirmation popup dialog
  const [open, setOpen] = useState(false);

  const [phone, setPhone] = useState("");

  const [serviceInquiry, setServiceInquiry] = useState(
    "Web Application Development"
  );

  // open and close dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
  };

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // form forward email functions using email js service
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${process.env.REACT_APP_CONTACT_FORM_SERVICE_ID}`,
        `${process.env.REACT_APP_CONTACT_FORM_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_CONTACT_FORM_USER_ACC}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // function to validate submit form and show
  const handleSubmitForm = (e) => {
    e.preventDefault();

    sendEmail();
    handleClickOpen();
  };

  // navigate back to homepage after the form is submitted
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  // styles variables
  const cardStyles = {
    padding: 4,
    borderRadius: 5,
    bgcolor: "secondary.dark",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const formTitleDisplayStyles = {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    overflow: "hidden",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    marginTop: 2,
    bgcolor: "rgba(255, 255, 255, 0.39)",
    borderRadius: "4px 25px 4px 25px",
    color: "secondary.main",
  };
  const textFieldStyles = {
    margin: "10px 0px",
    bgcolor: "rgba(255, 255, 255, 0.69)",
    borderRadius: 2,
  };

  const submitButtonStyles = {
    gap: 1,
    backgroundColor: "primary.main",
    marginTop: 1,
  };

  return (
    <>
      <Card sx={cardStyles}>
        <CardContent sx={formTitleDisplayStyles}>
          <Typography variant="h4"> Contact Me</Typography>
        </CardContent>

        <CardContent>
          <form ref={form} onSubmit={handleSubmitForm}>
            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Name"
              id="contactName"
              name="name"
            />

            <TextField
              fullWidth
              sx={textFieldStyles}
              value={phone}
              onChange={handlePhoneChange}
              label="Contact Phone"
              type="tel"
              id="contactPhone"
              name="phone"
            />

            <TextField
              fullWidth
              sx={textFieldStyles}
              label="Contact Email"
              type="email"
              id="contactEmail"
              name="userEmail"
            />

            <TextField
              sx={textFieldStyles}
              id="serviceInquirySelection"
              fullWidth
              select
              label="Service Category"
              value={serviceInquiry}
              onChange={handleServiceChange}
              name="serviceCategory"
            >
              {servicesOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <FormControl>
              <FormLabel id="radio-buttons-group-label">
                Preferred method of contact:
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                name="contactMethod"
              >
                <FormControlLabel
                  value="phone"
                  control={<Radio />}
                  label="Phone Call"
                />
                <FormControlLabel
                  value="text"
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
            />

            <Button
              variant="contained"
              sx={submitButtonStyles}
              type="submit"
              fullWidth
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
