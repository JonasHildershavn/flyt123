import cn from "classnames";

interface TagProps {
    text: string;
    category: string;
    children?: React.ReactNode
    className?: string;
  }
  
  const Tag: React.FC<TagProps> = ({
    text,
    category,
    children,
    className
  }) => (
    <span className={cn(className, "tag", {
      [`tag--${category}`]: category})}
    >
      
        {text}
        {children}
    </span>
  );
  
  export default Tag;