import Contributors from "../contributors/contributors";
import Heading from "../heading/heading";
import Interest from "../interest/interest";
import Tasks from "../tasks/tasks";
import ContactPersons from "../contact-persons/contact-persons";
import Status from "../status/status";

import { SanityProject } from "../../models/sanity-project";

const Project: React.FC<SanityProject> = ({
  title,
  description,
  completed,
  status,
  resources = ["figma", "github", "jira"],
  projectLeader,
  techLead,
  designLead,
  contributors,
  needs,
}) => {
  return (
    <div className="project">
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

        <div className="project__status">
          <Status status={status} />
        </div>
      </div>

      <Interest />
      <Tasks tasks={needs} />
      <Contributors contributors={contributors} />
    </div>
  );
};

const test = (title: any, author: any) => {
  console.log(author, title);
  return <></>;
};

export default Project;
