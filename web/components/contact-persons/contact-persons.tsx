import { SanityContactPerson } from "../../models/sanity-contact-person";
import Heading from "../heading/heading";

interface ContactPersonListProps {
  contactPersons: SanityContactPerson[];
}
const ContactPersons: React.FC<ContactPersonListProps> = ({
  contactPersons,
}) => (
  <div className="contact-persons">
    <Heading level={2}>Kontaktpersoner:</Heading>
    {contactPersons && contactPersons.length > 0 && (
      <ul className="contact-persons__list">
        {contactPersons.map(({ employee, role }, index) => (
          <li key={"contactPerson" + index} className="contact-persons__person">
            <p className="contact-persons__name">{employee.name}</p>
            <span className="contact-persons__role">({role})</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ContactPersons;
