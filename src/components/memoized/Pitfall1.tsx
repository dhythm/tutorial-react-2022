import { Button } from "@mui/material";
import { memo, useState, VFC } from "react";
import { Component } from "./Component";

export const Pitfall1 = () => {
  const [, setKey] = useState(0);
  const params = { foo: "bar" };
  console.log(`A is rendered!`);
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload A
      </Button>
      <MemoizedChild name="B1" params="foo" />
      <MemoizedChild name="B2" params={{ foo: "bar" }} />
      <MemoizedChild name="B3" params={params} />
    </>
  );
};

const Child: VFC<{ name: string; params: any }> = ({ name, params }) => {
  console.log(`${name} is rendered!`);
  return <Component name={name} />;
};

const MemoizedChild = memo(Child);
