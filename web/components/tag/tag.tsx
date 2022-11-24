import cn from "classnames";

interface TagProps {
  text: string;
  category: string;
  margin: "small-margin" | "big-margin";
}

const Tag: React.FC<TagProps> = ({
  text,
  category,
  margin = "small-margin",
}) => (
  <span
    className={cn(
      "tag",
      {
        [`tag--${category}`]: category,
      },
      `tag--${margin}`
    )}
  >
    {text}
  </span>
);

export default Tag;
