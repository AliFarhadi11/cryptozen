"use client";

import { ReactNode } from "react";
import { Fade, RevealProps } from "react-awesome-reveal";

interface FadeWrapperProps extends RevealProps {
  children: ReactNode;
  direction?: "down" | "up" | "left" | "right" | undefined;
}

const FadeWrapper = ({ children, direction, ...props }: FadeWrapperProps) => {
  return (
    <Fade direction={direction} {...props}>
      {children}
    </Fade>
  );
};

export default FadeWrapper;
