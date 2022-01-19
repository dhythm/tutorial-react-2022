import { Button } from "@mui/material";
import { memo, ReactNode, useState, VFC } from "react";

export const Quiz1 = () => {
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
      <Memoized name="B1">
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
  return <>{children}</>;
};

const Memoized = memo(Component);

const MemoizedChild = memo(() => <>bar</>);
