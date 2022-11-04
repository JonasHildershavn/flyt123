import Link from "next/link";
import Container from "../container/container";

const Hero: React.FC = () => (
  <section className="hero">
    <Container className="task-overview__container" theme="wide">
      <Link href="ledig-tid/1">
        <a className="hero__ledig-tid-btn">
          <span>MELD INN LEDIG TID</span>
        </a>
      </Link>
      <h2 className="hero__text">
        Velkommen til Flyt! Her finner du oversikt over internprosjekter og
        oppgaver man kan bidra med når man har ledig tid
      </h2>
    </Container>
  </section>
);

export default Hero;
