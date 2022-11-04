import Container from "../container/container";
import LinkButton from "../link-button/link-button";

const Header: React.FC = () => (
  <header className="header">
    <Container className="header__container" theme="wide">
      <a className="header__main-link" href="/">
        Flyt
      </a>
      <LinkButton className="" href="ledig-tid/1" text="Meld inn ledig tid" />
    </Container>
  </header>
);

export default Header;
