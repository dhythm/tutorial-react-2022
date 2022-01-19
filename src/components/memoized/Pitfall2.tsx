import { Button } from "@mui/material";
import { memo, useState, VFC } from "react";
import { Component } from "./Component";

export const Pitfall2 = () => {
  const [, setKey] = useState(0);
  const callback = () => {
    console.log("callback!!");
  };
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload A
      </Button>
      <MemoizedChild
        name="B1"
        callback={() => {
          console.log("callback!!");
        }}
      />
      <MemoizedChild name="B2" callback={callback} />
    </>
  );
};

const Child: VFC<{ name: string; callback: () => void }> = ({
  name,
  callback,
}) => {
  console.log(`${name} is rendered!`);
  return <Component name={name} />;
};

const MemoizedChild = memo(Child);
