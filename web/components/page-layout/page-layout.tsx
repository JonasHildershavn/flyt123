<<<<<<< HEAD
import Header from "../header/header";
import Footer from "../footer/footer";
import Container from "../container/container";

interface PageLayoutProps {
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="page-layout">
    <Header />
    <Container className="page-layout__content" theme="wide">
      {children}
    </Container>
    <Footer />
  </div>
);
=======
import Header from '../header/header'
import Footer from '../footer/footer'
import {Helmet} from "react-helmet";
import React from "react";

interface PageLayoutProps {
    children?: React.ReactNode;
    title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({children, title}) => (
    <div className="page-layout">
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Header />
        {children}
        <Footer />
    </div>
)
>>>>>>> origin/dev

export default PageLayout;
