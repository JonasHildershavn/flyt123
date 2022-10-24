interface TagProps {
    text: string;
    color: string;
  }
  
  const Tag: React.FC<TagProps> = ({
    text,
    color,
  }) => (
    <span className="tag">
        {text}
    </span>
  );
  
  export default Tag;