import Link from "next/link";
import Logo from '../logo/logo';

const Header: React.FC = () => (
  <header className="header">
    <Link href="/">
      <a className="header__logo">
        <span className="f">F</span>
        <span className="l">L</span>
        <span className="y">Y</span>
        <span className="t">T</span>  
      </a>
    </Link>
  </header>
);

export default Header;
