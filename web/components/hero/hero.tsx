import Link from "next/link";
import Container from "../container/container";
import Logo from "../logo/logo";
import MouseoverLogo from '../mousemove-logo/mousemove-logo'

const Hero: React.FC = () => (
  <section className="hero">
    <Container className="hero__container" theme="wide">
      <MouseoverLogo />
    </Container>
  </section>
);

export default Hero;
