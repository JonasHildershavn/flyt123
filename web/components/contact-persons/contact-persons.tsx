import Heading from "../heading/heading";

interface ContactPersonProps {
  title: string;
  role: string;
}
interface ContactPersonListProps {
  contactPersons: ContactPersonProps[];
}
const ContactPersons: React.FC<ContactPersonListProps> = ({
  contactPersons,
}) => (
  <div className="contact-persons">
    <Heading headingLevel="h2">Kontaktpersoner:</Heading>
    {contactPersons && contactPersons.length > 0 && (
      <ul className="contact-persons__list">
        {contactPersons.map(({ title, role }, index) => (
          <li key={"contactPerson" + index} className="contact-persons__person">
            <span className="contact-persons__pretext">{role}:</span>
            <p className="contact-persons__name">{title}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ContactPersons;
