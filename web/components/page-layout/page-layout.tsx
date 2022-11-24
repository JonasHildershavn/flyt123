import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Container from "../container/container";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useRouter } from "next/router";
import cn from 'classnames'

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  const router = useRouter()
  const [isFrontPage, setIsFrontPage] = useState(false)
  useEffect(() => {
    const path = router.pathname.substring(1)
    if (path.trim().length == 0) {
      setIsFrontPage(true)
    }
  }, [router.pathname])
  return (
    <div className={"page-layout"}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className={cn(
        "page-layout__content",
        !isFrontPage ? "page-layout__content--not-frontpage" : null,
      )}>{children}</main>
      <Footer />
    </div>
  );
} 

export default PageLayout;
