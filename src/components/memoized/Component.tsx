import { Button } from "@mui/material";
import { FC, useState } from "react";

export const Component: FC<{ name: string }> = ({ name, children }) => {
  console.log(`${name} is rendered!`);
  const [, setKey] = useState<number | undefined>(undefined);
  return (
    <>
      <Button variant="contained" onClick={() => setKey(Math.random() * 1000)}>
        Reload {name}
      </Button>
      {children}
    </>
  );
};
