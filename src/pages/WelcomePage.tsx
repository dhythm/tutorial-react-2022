import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../assets/css/App.css";
import logo from "../assets/img/logo.svg";
import { Page } from "../components/Page";
import { Switch } from "../components/Switch";
import { Welcome } from "../components/Welcome";

export const WelcomePage = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Page>
      <>
        <Grid container>
          <Grid item xs={12}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Grid>
          <Grid item xs={12}>
            <Switch />
          </Grid>
          <Grid item xs={12}>
            <Switch />
          </Grid>
          <Grid item xs={12}>
            <Switch />
          </Grid>
        </Grid>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>
            <Welcome name="React" />
          </DialogTitle>
          <DialogContent>
            <Typography>
              This message is only shown when you open the page.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </>
    </Page>
  );
};
