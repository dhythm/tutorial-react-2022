import { ComponentType } from "react";

export const withName = <P extends {}>(
  WrappedComponent: ComponentType<P & { name: string }>
) => {
  return (props: P) => <WrappedComponent {...props} name="React" />;
};
