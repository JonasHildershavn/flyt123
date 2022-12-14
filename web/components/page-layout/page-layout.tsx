import React from "react";
import { Helmet } from "react-helmet";
import Container from "../container/container";
import Header from "../header/header";
import Footer from "../footer/footer";

interface PageLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => (
  <div className="page-layout">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <main className="page-layout__content">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
