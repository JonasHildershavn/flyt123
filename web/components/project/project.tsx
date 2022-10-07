import Contributors from "../contributors/contributors";
import Heading from "../heading/heading";
import Interest from "../interest/interest";
import Tasks from "../tasks/tasks";
import Container from "../container/container";
import ContactPersons from "../contact-persons/contact-persons";

import { SanityProject } from "../../models/sanity-project";

const Project: React.FC<SanityProject> = ({
  title,
  description,
  completed,
  resources = ["figma", "github", "jira"],
  projectLeader,
  techLead,
  designLead,
  contributors,
}) => {
  return (
    <div className="project">
      <Container className="project__container" theme="wide">
        <Heading headingLevel="h1" className="project__title">
          {title}
        </Heading>
        <div className="project__onboarding">
          <div className="project__description">
            <Heading headingLevel="h2">Beskrivelse:</Heading>
            <p>{description}</p>
          </div>
          <div className="project__short-info">
            <div className="project__resources">
              {resources && resources.length > 0 && (
                <ul>
                  {resources.map((resource: any, index: number) => (
                    <li key={"resource-" + index}>{resource}</li>
                  ))}
                </ul>
              )}
            </div>
            <ContactPersons
              projectLeader={projectLeader}
              techLead={techLead}
              designLead={designLead}
            />
          </div>

          <div className="project__status">Prosjektstatus</div>
        </div>

        <Interest />
        <Tasks tasks={["1", "to", "drei", "svei"]} />
        <Contributors contributors={contributors} />
      </Container>
    </div>
  );
};

export default Project;
