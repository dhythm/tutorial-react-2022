import { AddSharp, RemoveSharp } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Switch as MuiSwitch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "../assets/css/App.css";
import logo from "../assets/img/logo.svg";
import { withName } from "../components/hocs/withName";
import { Page } from "../components/Page";
import { Welcome } from "../components/Welcome";
import { useCounter } from "../utils/hooks/useCounter";
import { useI18n } from "../utils/providers/I18nProvider";
import {
  useChangeTheme,
  useCurrentTheme,
} from "../utils/providers/ThemeProvider";

export const WelcomePage = () => {
  const [open, setOpen] = useState(false);
  const theme = useCurrentTheme();
  const [currentLanguage, changeLanguage] = useI18n();
  const changeTheme = useChangeTheme();
  const [count, increment, decrement] = useCounter();

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Page>
      <Grid container>
        <Grid item xs={12}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </Grid>
        <Grid item xs={12}>
          <Greeting />
        </Grid>
        <Grid item xs={12}>
          <Typography color={theme === "dark" ? "whitesmoke" : "black"}>
            Dark theme
          </Typography>
          <MuiSwitch onChange={changeTheme} defaultChecked />
        </Grid>
        <Grid item xs={12}>
          <Typography color={theme === "dark" ? "whitesmoke" : "black"}>
            {currentLanguage === "ja" ? "日本語" : "English"}
          </Typography>
          <MuiSwitch onChange={changeLanguage} defaultChecked />
        </Grid>
        <Grid item xs={12}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={150}
          >
            <IconButton color="primary" aria-label="minus" onClick={decrement}>
              <RemoveSharp />
            </IconButton>
            <Typography color={theme === "dark" ? "whitesmoke" : "black"}>
              {count}
            </Typography>
            <IconButton color="primary" aria-label="plus" onClick={increment}>
              <AddSharp />
            </IconButton>
          </Box>
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
    </Page>
  );
};

const Greeting = withName(Welcome);
