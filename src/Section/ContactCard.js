import { Button, CardContent, TextField, Typography, Paper, Alert, Snackbar, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import SendIcon from "@mui/icons-material/Send";
import CheckIcon from "@mui/icons-material/Check";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function ContactCard() {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p9eh0nc", "template_hh88sm5", form.current, {
        publicKey: "6ijGNDW82kEKxU8W9",
      })
      .then(
        () => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} style={{ width: "50%" }}>
        <Paper elevation={5}>
          <CardContent>
            <Grid container direction="column" spacing={4}>
              <Grid>
                <Typography variant="body1">Name</Typography>
                <TextField
                  fullWidth
                  label="Enter Your Name"
                  variant="outlined"
                  type="text"
                  name="user_name"
                  size="small"
                  required
                />
              </Grid>
              <Grid>
                <Typography variant="body1">Email</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Enter Your Email"
                  type="email"
                  name="user_email"
                  size="small"
                  required
                />
              </Grid>
              <Grid>
                <Typography variant="body1">Message</Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="message"
                  label="Enter Your Message"
                  multiline
                  rows={5}
                  required
                />
              </Grid>
              <Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button color="secondary" variant="contained" type="submit">
                    Submit <SendIcon sx={{ marginLeft: "10px" }} />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity="success" icon={<CheckIcon />}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ContactCard;
