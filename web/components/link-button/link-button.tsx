import cn from "classnames";
import Link from "next/link";

import Arrow from "../../assets/arrow.svg";

interface LinkProps {
  href?: string;
  text: string;
  className?: string;
  hrefShouldOpenInNewTab?: boolean;
  theme?: string;
}

const themes: { [key: string]: string } = {
  tag: "link-button--tag",
  transparent: "link-button--transparent",
  backButton: "link-button--back-button",
};

const LinkButton: React.FC<LinkProps> = ({
  href,
  text,
  className,
  hrefShouldOpenInNewTab,
  theme = "",
}) => {
  const targetAttributes =
    href && hrefShouldOpenInNewTab
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <div
      className={cn("link-button", className, {
        [themes[theme]]: themes[theme],
      })}
    >
      {href ? (
        <Link href={href}>
          <a className="link-button__text" {...targetAttributes}>
            {theme === "backButton" && <Arrow />}
            {text}
          </a>
        </Link>
      ) : (
        <span className="link-button__text">{text}</span>
      )}
    </div>
  );
};

export default LinkButton;
