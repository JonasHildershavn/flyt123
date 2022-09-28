import Header from '../header/header'
import Footer from '../footer/footer'

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => (
    <div className="page-layout">
        <Header />
        {children}
        <Footer />
    </div>
)

export default PageLayout