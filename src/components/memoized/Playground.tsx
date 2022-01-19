import { Grid, Typography } from "@mui/material";
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
        <Typography color={"whitesmoke"}>Sample 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Sample1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Sample 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Sample2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Pitfall 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Pitfall 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Pitfall 3</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall3 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Quiz 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Quiz1 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Pitfall 4</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Pitfall4 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Quiz 2</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Quiz2 />
      </Grid>

      <Grid item xs={1} container alignItems={"center"}>
        <Typography color={"whitesmoke"}>Appendix 1</Typography>
      </Grid>
      <Grid item xs={11} direction={"row"}>
        <Appendix1 />
      </Grid>
    </Grid>
  );
};
