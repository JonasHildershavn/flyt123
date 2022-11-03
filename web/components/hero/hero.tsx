import Link from "next/link";
import Container from "../container/container";
import Logo from "../logo/logo";

const Hero: React.FC = () => (
  <section className="hero">
    <Container className="project-overview__container" theme="wide">
      <Logo />
    </Container>
  </section>
);

export default Hero;
