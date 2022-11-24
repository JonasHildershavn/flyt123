import { useEffect, useRef, useState } from "react";
import cn from "classnames";

import Container from "../container/container";
import LinkButton from "../link-button/link-button";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [numLikes, setNumLikes] = useState(0);
  const [anim, setAnim] = useState(false);
  const router = useRouter()
  const headerHeight = 80 
  const logoHeight = 290
  const [isFrontPage, setIsFrontPage] = useState(false)

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

  const [showHeader, setShowHeader]  = useState(false)
  const showHeaderChecker = useRef(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (router.pathname.substring(0).trim().length == 0) {
      setIsFrontPage(true)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    setIsFrontPage(router.pathname.substring(0).trim().length == 0)
  }, [router.pathname])

  

  useEffect(() => {
    console.log(showHeader)
  }, [showHeader])

  const handleScroll = (ev: any) => {
    const shouldShowHeader = window.scrollY > logoHeight && lastScrollY.current < window.scrollY
    if (shouldShowHeader != showHeaderChecker.current) {
      console.log("Inside show header")
      showHeaderChecker.current = shouldShowHeader
      setShowHeader(shouldShowHeader)
    }
    lastScrollY.current = window.scrollY
  }

  return (

    <header className={cn(
        "header",
        showHeader ? "header--show" : null,
      )} >
        <Link href="/">
          <a className="header__main-link">FLYT</a>
        </Link>
        <div className="header__like-wrapper">
          <LinkButton
            className="header__available-button"
            href="ledig-tid/1"
            text="Meld interesser"
            theme="transparent"
            />
          <Link href={"ledig-tid/1"}>
            <div className={cn(
              "header__counter2",
              anim ? "header__counter2--pulse" : null,
              numLikes > 0 ? "header__counter2--active" : null
            )}>
              {numLikes}
            </div>
          </Link>
        </div>
    </header>
    
  );
};

export default Header;
