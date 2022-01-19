import { Grid } from "@mui/material";
import { Pitfall1 } from "./Pitfall1";
import { Pitfall2 } from "./Pitfall2";
import { Pitfall3 } from "./Pitfall3";
import { Pitfall4 } from "./Pitfall4";
import { Sample1 } from "./Sample1";
import { Sample2 } from "./Sample2";

export const Playground = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} direction={"row"}>
        <Sample1 />
      </Grid>
      <Grid item xs={12} direction={"row"}>
        <Sample2 />
      </Grid>
      <Grid item xs={12} direction={"row"}>
        <Pitfall1 />
      </Grid>
      <Grid item xs={12} direction={"row"}>
        <Pitfall2 />
      </Grid>
      <Grid item xs={12} direction={"row"}>
        <Pitfall3 />
      </Grid>
      <Grid item xs={12} direction={"row"}>
        <Pitfall4 />
      </Grid>
    </Grid>
  );
};

// const ParentComponent: FC<{ name: string }> = ({ name, children }) => {
//   console.log(`${name} is rendered!`);
//   const [, setKey] = useState<number | undefined>(undefined);
//   return (
//     <>
//       <Button
//         variant="contained"
//         color="secondary"
//         onClick={() => setKey(Math.random() * 1000)}
//       >
//         Reload {name}
//       </Button>
//       {children}
//     </>
//   );
// };
