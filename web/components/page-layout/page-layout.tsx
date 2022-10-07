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

export default PageLayout