import cn from "classnames";

interface TagProps {
    text: string;
    category: string;
  }
  
  const Tag: React.FC<TagProps> = ({
    text,
    category,
  }) => (
    <span className={cn("tag", {
      [`tag--${category}`]: category,
    })}
    >
        {text}
    </span>
  );
  
  export default Tag;