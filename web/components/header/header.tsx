import Link from "next/link";
import { useEffect, useState } from "react";
import cn from "classnames";

import Container from "../container/container";
import LinkButton from "../link-button/link-button";

interface HeaderProps {
  isFrontPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFrontPage }) => {
  const [numLikes, setNumLikes] = useState(0);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const getLikes = () => {
      const currentItems: Array<string> =
        sessionStorage.getItem("likes") !== null &&
        sessionStorage.getItem("likes") !== "undefined"
          ? JSON.parse(String(sessionStorage.getItem("likes")))
          : [];
      const currentItemsToAdd: Array<string> =
        sessionStorage.getItem("addLikes") !== null &&
        sessionStorage.getItem("addLikes") !== "undefined"
          ? JSON.parse(String(sessionStorage.getItem("addLikes")))
          : [];
      const currentItemsToRemove: Array<string> =
        sessionStorage.getItem("removeLikes") !== null &&
        sessionStorage.getItem("removeLikes") !== "undefined"
          ? JSON.parse(String(sessionStorage.getItem("removeLikes")))
          : [];

      setNumLikes(
        currentItems.length +
          currentItemsToAdd.length -
          currentItemsToRemove.length
      );
    };

    getLikes();
    window.addEventListener("storage", () => {
      getLikes();
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
            text="Mine interesser"
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
      {!isFrontPage && (
        <div className="header__back-button-wrapper">
          <LinkButton href="/" theme="backButton" text="Tilbake til forsiden" />
        </div>
      )}
    </header>
  );
};

export default Header;
