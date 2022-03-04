import * as React from "react";
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
const initialFormValues = { name: "", userEmail: "", phone: "", message: "" };

const servicesOptions = [
  { value: "Web Design & Development", label: "Web Design & Development" },
  { value: "Web Maintenance", label: "Website Maintenance" },
  { value: "Other", label: "Other" },
];
// transition for message sent confirmation popup
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactForm() {
  // message sent confirmation popup state, hidden on init
  const [open, setOpen] = React.useState(false);

  // states for form inputs to validate input and set input errors
  const [formValues, setFormValues] = React.useState(initialFormValues);
  const [formErrors, setFormErrors] = React.useState({});

  // on submit state that'll get set to true when all inputs are valid
  // and will allow the popup to appear and message to send
  const [isSubmit, setIsSubmit] = React.useState(false);

  const [serviceInquiry, setServiceInquiry] = React.useState(
    "Web Design & Development"
  );

  // open and close dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    routeChange();
  };

  // handlechange to add input values into empty state for validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleServiceChange = (event) => {
    setServiceInquiry(event.target.value);
  };

  // form forward email functions using email js service
  const form = React.useRef();

  const sendEmail = () => {
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

  // function to validate submit form and show
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // useEffect that'll automatically submit the form and have the popup
  // once everything in the input fields are valid
  React.useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      sendEmail();
      handleClickOpen();
    }
  });

  // different possible errors for input fields
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.userEmail) {
      errors.userEmail = "Email is required!";
    } else if (!regex.test(values.userEmail)) {
      errors.userEmail = "This is not a valid email format";
    }
    if (values.phone < 10) {
      errors.phone = "Phone number must be at least 10 numbers";
    }
    if (values.message < 30) {
      errors.message = "Message must be at least 30 characters";
    }
    return errors;
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

  const errorMessageStyle = {
    color: "#a00e0e",
    display: "flex",
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
            <span style={errorMessageStyle}> {formErrors.name}</span>
            <div id="inputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                value={formValues.name}
                onChange={handleChange}
                label="Name"
                id="contactName"
                name="name"
              />
            </div>
            <span style={errorMessageStyle}> {formErrors.phone}</span>
            <div id="inputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                value={formValues.phone}
                onChange={handleChange}
                label="Contact Phone"
                type="tel"
                id="contactPhone"
                name="phone"
              />
            </div>
            <span style={errorMessageStyle}> {formErrors.userEmail}</span>
            <div id="inputField">
              <TextField
                fullWidth
                sx={textFieldStyles}
                value={formValues.userEmail}
                onChange={handleChange}
                label="Contact Email"
                type="email"
                id="contactEmail"
                name="userEmail"
              />
            </div>

            <div id="inputField">
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
            </div>
            <div id="inputField">
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
            </div>
            <span style={errorMessageStyle}> {formErrors.message}</span>
            <div id="inputField">
              <TextField
                fullWidth
                multiline
                sx={textFieldStyles}
                value={formValues.message}
                onChange={handleChange}
                rows={5}
                label="Message"
                id="fullWidth"
                name="message"
              />
            </div>

            <div>
              <Button variant="contained" sx={submitButtonStyles} type="submit">
                <SendIcon /> Submit
              </Button>
            </div>
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
