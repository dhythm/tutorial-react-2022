import { Grid, Typography as MuiTypography } from "@mui/material";
import { ComponentProps, FC } from "react";
import { useCurrentTheme } from "../../utils/providers/ThemeProvider";
import { Appendix1 } from "./Appendix1";
import { Pitfall1 } from "./Pitfall1";
import { Pitfall2 } from "./Pitfall2";
import { Pitfall3 } from "./Pitfall3";
import { Pitfall4 } from "./Pitfall4";
import { Quiz1 } from "./Quiz1";
import { Quiz2 } from "./Quiz2";
import { Sample1 } from "./Sample1";
import { Sample2 } from "./Sample2";

export const Playground = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Sample 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Sample1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Sample 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Sample2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Pitfall 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Pitfall 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Pitfall 3</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall3 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Quiz 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Quiz1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Pitfall 4</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall4 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Quiz 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Quiz2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography>Appendix 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Appendix1 />
      </Grid>
    </Grid>
  );
};

const Typography: FC<ComponentProps<typeof MuiTypography>> = ({ ...props }) => {
  const currentTheme = useCurrentTheme();
  return (
    <MuiTypography
      color={currentTheme === "dark" ? "whitesmoke" : "black"}
      {...props}
    />
  );
};
