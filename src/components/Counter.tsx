import { useState, VFC } from "react";

export const Counter: VFC<{
  render: (count: number, handleClick: () => void) => JSX.Element;
}> = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <>{props.render(count, handleClick)}</>;
};
