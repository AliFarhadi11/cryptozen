import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="cs-container">{children}</div>;
};

export default Container;
