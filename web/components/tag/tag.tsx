interface TagProps {
    text: string;
    category: string;
  }
  
  const Tag: React.FC<TagProps> = ({
    text,
    category,
  }) => (
    <span className={`tag--${text}`}>
        {text}
    </span>
  );
  
  export default Tag;

  export const tagText = (catgory: string) => {
    switch (catgory) {
      case 'development':
        return 'Utvikling'
      case 'design':
        return 'Design'
      case 'content':
        return 'Innhold'
      case 'administration':
        return 'Ledelse'
      case 'other':
        return 'Annet'
      default:
        return ''
    }
  }