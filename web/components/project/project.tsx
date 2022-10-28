import Contributors from "../contributors/contributors";
import Heading from "../heading/heading";
import Interest from "../interest/interest";
import ContactPersons from "../contact-persons/contact-persons";
import Status from "../status/status";
import Container from "../container/container";
import CollabtoolList from "../collabtool-list/collabtool-list";
import Tag from "../tag/tag";

import { SanityProject } from "../../models/sanity-project";

const Project: React.FC<SanityProject> = ({
  title,
  description,
  completed,
  status,
  collabtools,
  contactPersons,
  tags,
}) => {
  return (
    <div className="project">
      <Container className="project__container" theme="wide">
        <Heading level={1} className="project__title">
          {title}
        </Heading>
        <div className="project__grid">
          <div className="project__sidebar">
            <div className="project__sidebar-col">
              <Status status={status} />
            </div>
            <div className="project__sidebar-col">
              <ContactPersons contactPersons={contactPersons} />
            </div>
          </div>
          <div className="project__content">
            <p className="project__description">{description}</p>
            <div className="project__tags-wrapper">
              <Heading level={2} className="project__tags-header">
                Dette trenger vi hjelp til:
              </Heading>
              <div className="project__tags">
                {tags &&
                  tags.length > 0 &&
                  tags.map((tag, index) => (
                    <Tag key={tag.tag} color={""} text={tag.tag} />
                  ))}
              </div>
            </div>
            <div className="project__resources">
              {collabtools && collabtools.length > 0 && (
                <div>
                  <h2>Samarbeidsverktøy</h2>
                  <CollabtoolList collabtools={collabtools} />
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
