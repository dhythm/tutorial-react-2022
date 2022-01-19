import { Button } from "@mui/material";
import { FC, useState } from "react";

// export const Quiz2 = () => {
//   return (
//     <Component name="foo">
//       <Component name="bar" />
//       <Component name="baz" />
//     </Component>
//   );
// };

export const Quiz2 = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

const Parent: FC = ({ children }) => {
  const [, setKey] = useState(0);
  console.log(`Parent is rendered!`);
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload Parent
      </Button>
      {children}
    </>
  );
};

const Child: FC = () => {
  const [, setKey] = useState(0);
  console.log(`Child is rendered!`);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload Child
      </Button>
    </>
  );
};
