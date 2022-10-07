import Link from "next/link";

const Header: React.FC = () => (
  <header className="header">
    <Link href="/" className="header__logo">
      <h1 className="header__logo-text">Flyt</h1>
    </Link>
    <span className="header__tagline">Plattformen for deg som flyter</span>
  </header>
);

export default Header;
