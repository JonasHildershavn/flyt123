import BlockContent from "@sanity/block-content-to-react";
import { SanityProject } from "../../models/sanity-project";

import Heading from "../heading/heading";
import ContactPersons from "../contact-persons/contact-persons";
import Status from "../status/status";
import Container from "../container/container";
import CollabtoolList from "../collabtool-list/collabtool-list";
import LikeButton from "../like-button/like-button";
import Tags from "../tags/tags";

const Project: React.FC<SanityProject> = ({
  title = "Prosjekt",
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
        <div className="project__header">
          <Heading level={1} className="project__title">
            {title}
          </Heading>
          <div className="project__like-button">
            <LikeButton target={title} width={"57px"} height={"57px"} />
          </div>
        </div>
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
            {description && (
              <div className="project__description">
                <BlockContent blocks={description} />
              </div>
            )}

            {tags && (
              <div className="project__tags-wrapper">
                <Heading level={2} className="project__tags-header">
                  Dette trenger vi hjelp til:
                </Heading>
                <Tags tags={tags} theme="left" />
              </div>
            )}
            {collabtools && collabtools.length > 0 && (
              <div className="project__resources">
                <div>
                  <Heading level={2} className="project__tags-header">
                    Samarbeidsverktøy:
                  </Heading>
                  <CollabtoolList collabtools={collabtools} />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Project;
