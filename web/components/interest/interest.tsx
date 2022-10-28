import Heading from "../heading/heading";

const Interest: React.FC = () => (
  <div className="interest">
    <Heading level={2} className="interest__title">
      Vil du ha en større rolle i prosjektet
    </Heading>
    <p>
      Jeg er _________ og har ca. _________% ledig tid i _________ uke(r).
      <br />
      Jeg har lyst til å bli med fordi _________.
    </p>
  </div>
);

export default Interest;
