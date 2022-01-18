import { VFC } from "react";

export const Welcome: VFC<{ name: string }> = ({ name }) => {
  return <h1>Hello, {name}</h1>;
};
