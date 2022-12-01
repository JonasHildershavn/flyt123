import cn from "classnames";

interface TagProps {
  text: string;
  category: string;
  children?: React.ReactNode;
  margin: "small-margin" | "big-margin";
  className?: string;
}

const Tag: React.FC<TagProps> = ({
  text,
  category,
  children,
  className,
  margin = "small-margin",
}) => (
  <span
    className={cn(
      className,
      "tag",
      {
        [`tag--${category}`]: category,
      },
      `tag--${margin}`
    )}
  >
    {text}
    {children}
  </span>
);

export default Tag;
