import Header from '../header/header'
import Footer from '../footer/footer'

interface PageLayoutProps {
    children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default PageLayout