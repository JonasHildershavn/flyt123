import Link from "next/link";
import { useEffect, useState } from "react";
import cn from "classnames";

import Container from "../container/container";
import LinkButton from "../link-button/link-button";

const Header: React.FC = () => {
  const [numLikes, setNumLikes] = useState(0);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const currentItems: Array<string> =
      localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : [];
    setNumLikes(currentItems.length);

    window.addEventListener("storage", () => {
      const currentItems: Array<string> =
        localStorage.getItem("likes") !== null
          ? JSON.parse(String(localStorage.getItem("likes")))
          : [];
      setNumLikes(currentItems.length);

      setAnim(true);
      setTimeout(() => setAnim(false), 500);
    });
  }, []);

  return (
    <header className="header">
      <Container className="header__container" theme="wide">
        <Link href="/">
          <a className="header__main-link">Flyt</a>
        </Link>
        <div className="header__like-wrapper">
          <LinkButton
            className="header__available-button"
            href="/mine-interesser/"
            text="Meld inn ledig tid"
            theme="transparent"
          />
          <span
            key="counter"
            className={cn(
              "header__counter",
              anim ? "header__counter--pulse" : null
            )}
          >
            {numLikes}
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
