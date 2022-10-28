import React, { ReactNode } from "react";
import cn from "classnames";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  theme?: string;
  children: ReactNode;
}

const themes: { [key: string]: string } = {
  pinkUnderline: "heading--pink-underline",
};

const Heading = ({
  level = 2,
  children,
  className,
  theme = "",
}: HeadingProps) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn("heading", className, {
        [themes[theme]]: themes[theme],
      }),
    },
    children
  );
};

export default Heading;
