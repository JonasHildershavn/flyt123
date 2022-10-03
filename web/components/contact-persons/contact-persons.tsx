import Heading from '../heading/heading';

interface ContributionsProps {
  projectLeader: string;
  techLead: string;
  designLead: string;
}
const ContactPersons: React.FC<ContributionsProps> = ({ projectLeader, techLead, designLead }) => (
  <div className='contact-persons'>
    <Heading headingLevel='h2'>Kontaktpersoner:</Heading>
    {projectLeader && (
        <ul className='contact-persons__list'>
            {projectLeader && (
                <li className='contact-persons__person'>
                    <span className='contact-persons__pretext'>Prosjektleder:</span>
                    <p className='contact-persons__name'>{projectLeader}</p>
                </li>
            )}
            {techLead && (
                <li className='contact-persons__person'>
                    <span className='contact-persons__pretext'>Tech lead:</span>
                    <p className='contact-persons__name'>{techLead}</p>
                </li>
            )}
            {designLead && (
                <li className='contact-persons__person'>
                    <span className='contact-persons__pretext'>Design lead:</span>
                    <p className='contact-persons__name'>{designLead}</p>
                </li>
            )}
        </ul>
    )}
  </div>
);

export default ContactPersons;
