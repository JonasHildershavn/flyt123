import { SanityProject } from "../../models/sanity-project";

import Contributors from "../contributors/contributors";
import Heading from "../heading/heading";
import Interest from "../interest/interest";
import Tasks from "../tasks/tasks";
import ContactPersons from "../contact-persons/contact-persons";
import Status from "../status/status";
import CollabtoolList from "../collabtool-list/collabtool-list";
import LikeButton from "../like-button/like-button";

import Star from "../../assets/star.svg";

const Project: React.FC<SanityProject> = ({
  _id,
  title = "Prosjekt",
  description,
  completed,
  status,
  collabtools,
  contactPersons,
  contributors,
}) => {
  return (
    <div className="project">
      <div className="project__header">
        <Heading headingLevel="h1" className="project__title">
          {title}
        </Heading>
        <div className="project__like-button">
          <LikeButton target={title} width={"57px"} height={"57px"} />
        </div>
      </div>

      <div className="project__onboarding">
        <div className="project__description">
          <Heading headingLevel="h2">Beskrivelse:</Heading>
          <p>{description}</p>
        </div>
        <div className="project__short-info">
          <div className="project__resources">
            {collabtools && collabtools.length > 0 && (
              <div>
                <h2>Samarbeidsverktøy</h2>
                <CollabtoolList collabtools={collabtools} />
              </div>
            )}
          </div>
          <ContactPersons contactPersons={contactPersons} />
        </div>

        <div className="project__status">
          <Status status={status} />
        </div>
      </div>

      <Interest />
      <Tasks tasks={["1", "to", "drei", "svei"]} />
      <Contributors contributors={contributors} />
    </div>
  );
};

export default Project;
