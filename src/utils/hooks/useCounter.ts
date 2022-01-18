import { useReducer } from "react";

const reducer = (
  state: { count: number },
  action: { type: "increment" | "decrement" }
) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const useCounter = (): [number, () => void, () => void] => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return [state.count, increment, decrement];
};
