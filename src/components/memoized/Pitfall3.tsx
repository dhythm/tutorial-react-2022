import { Button } from "@mui/material";
import { memo, ReactNode, useState, VFC } from "react";

export const Pitfall3 = () => {
  const [, setKey] = useState(0);
  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => setKey(Math.random() * 1000)}
      >
        Reload A
      </Button>
      <Memoized name="B1">bar</Memoized>
      <Memoized name="B2">
        <b>bar</b>
      </Memoized>
      <Memoized name="B3">
        <MemoizedChild />
      </Memoized>
    </>
  );
};

const Component: VFC<{ name: string; children: ReactNode }> = ({
  name,
  children,
}) => {
  console.log(`${name} is rendered!`);
  return <div>{children}</div>;
};

const Memoized = memo(Component);

const MemoizedChild = memo(() => <div>bar</div>);
