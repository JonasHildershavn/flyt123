import Link from "next/link";
import Container from "../container/container";
import LinkButton from "../link-button/link-button";

const Header: React.FC = () => (
  <header className="header">
    <Container className="header__container" theme="wide">
      <Link href="/">
        <a className="header__main-link">FLYT</a>
      </Link>
      
      <LinkButton className="" href="/ledig-tid/1" text="Meld inn ledig tid" />
    </Container>
  </header>
);

export default Header;
