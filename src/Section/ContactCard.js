import {
  Button,
  CardContent,
  TextField,
  Typography,
  Paper,
  Alert,
  Snackbar,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';


function ContactCard() {
  const form = useRef();

  const [open, setOpen] = useState(false); // State for Snackbar visibility

  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p9eh0nc", "template_hh88sm5", form.current, {
        publicKey: "6ijGNDW82kEKxU8W9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(true);

          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <Paper elevation={5}>
        <CardContent>
          <Grid container direction={"column"} spacing={4}>
            <Grid item>
              <Typography variant="body1">Name</Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter Your Name"
                variant="outlined"
                type = "text"
                name="user_name"
                size = "small"

              />
            </Grid>
            <Grid item>
              <Typography  variant="body1">Email</Typography>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                label="Enter Your Email"
                type="email" name="user_email"
                size = "small"
              />
            </Grid>

            <Grid item>
              <Typography variant="body1">Message</Typography>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                variant="outlined"
                name="message"
                size = "small"
                label="Enter Your Message"

                rows={5}
              />
            </Grid>
            <Grid item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignContent: "center",
                }}
              >
                <Button color="secondary" variant="contained"
                type="submit" value="Send" >
                  Submit <SendIcon sx = {{marginLeft: "10px"}} />
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" icon={<CheckIcon fontSize="body1" />}>
          Here is a gentle confirmation that your action was successful.
        </Alert>
      </Snackbar>

    </>
  );
}

export default ContactCard;
