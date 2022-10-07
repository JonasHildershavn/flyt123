import Link from "next/link";

const Hero: React.FC = () => (
  <section className="hero">
    <Link href="ledig-tid/1" >
      <a className="hero__ledig-tid-btn">
        <span>Meld inn ledig tid</span>
      </a>
    </Link>
    <h2 className="hero__text">Velkommen til Flyt! Her finner du oversikt over internprosjekter og oppgaver man kan bidra med når man har ledig tid</h2>
  </section>
);

export default Hero;
