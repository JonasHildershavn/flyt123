import cn from "classnames";

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
        <a className="link-button__text" href={href} {...targetAttributes}>
          {text}
        </a>
      ) : (
        <span className="link-button__text">{text}</span>
      )}
    </div>
  );
};

export default LinkButton;
