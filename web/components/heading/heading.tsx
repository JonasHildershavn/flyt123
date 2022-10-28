import React from "react";
import cn from "classnames";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  theme?: string;
}

const themes: { [key: string]: string } = {
  pinkUnderline: "heading--pink-underline",
};

const Heading = ({
  headingLevel = "p",
  children,
  className,
  theme = "",
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);

  return (
    <Heading
      className={cn("heading", { [themes[theme]]: themes[theme] }, className)}
    >
      {children}
    </Heading>
  );
};

export default Heading;
