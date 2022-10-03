import Heading from '../heading/heading';

interface ContributionsProps {
  contributors: string[];
}

const Contributors: React.FC<ContributionsProps> = ({ contributors }) => (
  <div className='contributors'>
    <Heading headingLevel='h2' className='contributors__heading'>Tusen takk for alle bidrag - store og små</Heading>
    {contributors && contributors.length > 0 && (
      <ul className='contributors__list'>
        {contributors.map((element, index) => (
            <li className='contributors__list-item' key={index}>{element.name}</li> //TODO: fix redline
        ))}
      </ul>
    )}
  </div>
);

export default Contributors;
