import cn from "classnames";

import Link from "next/link";

interface LinkProps {
  href?: string;
  text: string;
  className?: string;
}

const LinkButton: React.FC<LinkProps> = ({ href, text, className }) => (
  <div className={cn("link-button", className)}>
    {href ? <Link href={href}>{text}</Link> : <span>{text}</span>}
  </div>
);

export default LinkButton;
