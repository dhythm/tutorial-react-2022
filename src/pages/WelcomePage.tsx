import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Switch as MuiSwitch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../assets/css/App.css";
import logo from "../assets/img/logo.svg";
import { Page } from "../components/Page";
import { Welcome } from "../components/Welcome";
import { useI18n } from "../utils/hooks/I18nProvider";
import { useChangeTheme, useCurrentTheme } from "../utils/hooks/ThemeProvider";

export const WelcomePage = () => {
  const [open, setOpen] = useState(false);
  const theme = useCurrentTheme();
  const [currentLanguage, changeLanguage] = useI18n();
  const changeTheme = useChangeTheme();

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
            <Typography color={theme === "dark" ? "whitesmoke" : "black"}>
              Dark theme
            </Typography>
            <MuiSwitch onChange={() => changeTheme()} defaultChecked />
          </Grid>
          <Grid item xs={12}>
            <Typography color={theme === "dark" ? "whitesmoke" : "black"}>
              {currentLanguage === "ja" ? "日本語" : "English"}
            </Typography>
            <MuiSwitch onChange={() => changeLanguage()} defaultChecked />
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
