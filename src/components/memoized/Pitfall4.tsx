import { Button } from "@mui/material";
import { memo, useCallback, useState, VFC } from "react";

export const Pitfall4 = () => {
  const [, setKey] = useState(0);
  const callback = () => {
    console.log("callback!!");
  };
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
      <Component name="B" callback={callback} />
    </>
  );
};

const Component: VFC<{ name: string; callback: () => void }> = ({
  name,
  callback,
}) => {
  console.log(`${name} is rendered!`);
  const memoizedCallback = useCallback(() => {
    callback();
  }, [callback]);
  return <Memoized name="C" callback={memoizedCallback} />;
};

const Memoized = memo<{ name: string; callback: () => void }>(
  ({ name, callback }) => {
    console.log(`${name} is rendered!`);
    return <></>;
  }
);
