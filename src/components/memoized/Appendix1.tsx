import { Button } from "@mui/material";
import { FC, useState } from "react";

export const Appendix1 = () => {
  return <Ancestor />;
};

const Ancestor = () => {
  console.log(`Ancestor is rendered!`);
  return <Parent />;
};

// NOTE:
// JSXs of Child and Descendant are re-created when `Reload Parent` is clicked.
// On the other hand, JSX of Descendant is NOT re-created when `Reload Child` is clicked.
// This is the reason why re-rendering is NOT fired by nested buttons.
const Parent: FC = () => {
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
      <Child>
        <Descendant />
      </Child>
    </>
  );
};
const Child: FC = ({ children }) => {
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
      {children}
    </>
  );
};
const Descendant = () => {
  console.log(`Descendant is rendered!`);
  return null;
};
