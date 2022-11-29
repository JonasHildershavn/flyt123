import React from "react";
import { Helmet } from "react-helmet";
import Container from "../container/container";
import Header from "../header/header";
import Footer from "../footer/footer";

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
  isFrontPage?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  isFrontPage = false,
}) => (
  <div className="page-layout">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header isFrontPage={isFrontPage} />
    <main className="page-layout__content">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
