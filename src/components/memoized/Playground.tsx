import { Grid } from "@mui/material";
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
