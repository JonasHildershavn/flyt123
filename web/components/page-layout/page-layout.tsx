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

export default PageLayout;
