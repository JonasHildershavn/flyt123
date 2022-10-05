import Heading from '../heading/heading';

interface ContributionsProps {
  contributions: string[];
}
const Contributions: React.FC<ContributionsProps> = ({ contributions }) => (
  <>
    <Heading headingLevel='h2'>Tusen takk for alle bidrag - store og små</Heading>
    {contributions && contributions.length > 0 && (
      <ul>
        {contributions.map((element, index) => (
            <li key={index}>{element}</li>
        ))}
      </ul>
    )}
  </>
);

export default Contributions;
