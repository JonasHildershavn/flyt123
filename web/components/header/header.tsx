import Link from "next/link";
import Container from "../container/container";

const Header: React.FC = () => (
  <header className="header">
    <Container className="header__container" theme="wide">
      <a className="header__main-link" href="/">
        Flyt
      </a>
      <Link href="ledig-tid/1">
        <a className="header__button">
          <span>MELD INN LEDIG TID</span>
        </a>
      </Link>
    </Container>
  </header>
);

export default Header;
