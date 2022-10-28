import Container from "../container/container";
import LinkButton from "../link-button/link-button";
import Heading from "../heading/heading";

interface CtaAvailableBannerProps {}

const CtaAvailableBanner: React.FC<CtaAvailableBannerProps> = ({}) => {
  return (
    <section className="cta-available-banner">
      <Container className="cta-available-banner__container" theme="wide">
        <Heading headingLevel="h2" className="cta-available-banner__title">
          Pst... finner du ingenting interessant?
        </Heading>
        <div className="cta-available-banner__content">
          <p className="cta-available-banner__text">
            Hvis du ikke finner noe du kan tenke deg å gjøre, kan du melde om
            ledig tid. Det gjør at andre kan finne deg og gi deg oppgaver...
          </p>

          <LinkButton
            className="cta-available-banner__button"
            text="Meld ledig tid"
            href="/ledig-tid/1"
          />
        </div>
      </Container>
    </section>
  );
};

export default CtaAvailableBanner;
