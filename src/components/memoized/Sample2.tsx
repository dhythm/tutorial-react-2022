import { Button } from "@mui/material";
import { memo, useState, VFC } from "react";
import { Component } from "./Component";

export const Sample2 = () => {
  return <ComponentA />;
};

const ComponentA = () => {
  const [, setKey] = useState(0);
  console.log("A is rendered");
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload A
      </Button>
      <ComponentB1 />
      <ComponentB2 />
    </>
  );
};

const ComponentB1: VFC = () => {
  console.log(`B1 is rendered!`);
  const [, setKey] = useState<number | undefined>(undefined);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload B1
      </Button>
      <MemoisedComponent name="C1" />
      <Component name="C2" />
    </>
  );
};

const MemoisedComponent = memo(Component);

const ComponentB2: VFC = () => {
  console.log(`B2 is rendered!`);
  const [, setKey] = useState<number | undefined>(undefined);
  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload B2
      </Button>
      <Component name="D1" />
      <Component name="D2" />
    </>
  );
};
