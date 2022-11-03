import BlockContent from "@sanity/block-content-to-react";
import Heading from "../heading/heading";
import ContactPersons from "../contact-persons/contact-persons";
import Status from "../status/status";
import Container from "../container/container";
import CollabtoolList from "../collabtool-list/collabtool-list";
import Tags from "../tags/tags";

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
            <div className="project__description">
              <BlockContent blocks={description} />
            </div>
            <div className="project__tags-wrapper">
              {tags && (
                <>
                  <Heading level={2} className="project__tags-header">
                    Dette trenger vi hjelp til:
                  </Heading>
                  <Tags tags={tags} />
                </>
              )}
            </div>
            <div className="project__resources">
              {collabtools && collabtools.length > 0 && (
                <div>
                  <Heading level={2} className="project__tags-header">
                    Samarbeidsverktøy:
                  </Heading>
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
