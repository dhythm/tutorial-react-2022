import { Switch as MuiSwitch } from "@mui/material";
import { useState } from "react";

export const Switch = () => {
  const [checked, setChecked] = useState(true);
  return (
    <MuiSwitch
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};
