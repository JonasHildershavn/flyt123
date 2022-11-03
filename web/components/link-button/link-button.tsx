import cn from "classnames";

interface LinkProps {
  href?: string;
  text: string;
  className?: string;
}

const LinkButton: React.FC<LinkProps> = ({ href, text, className }) => (
  <div className={cn("link-button", className)}>
    {href ? (
      <a className="link-button__text" href={href}>
        {text}
      </a>
    ) : (
      <span className="link-button__text">{text}</span>
    )}
  </div>
);

export default LinkButton;
