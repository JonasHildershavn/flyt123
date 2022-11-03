import { useEffect, useState } from "react";
import cn from "classnames";

import {
  CategoryText,
  SanityProjectTag,
} from "../../models/sanity-project-tags";

import Tag from "../tag/tag";
import Heading from "../heading/heading";
import Tags from "../tags/tags";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: SanityProjectTag[];
  slug: any;
  theme?: string;
}

const themes: { [key: string]: string } = {
  white: "white",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  tags,
  slug,
  theme = "",
}) => {
  return (
    <a
      key={_id}
      title={title}
      className={cn("project-card", {
        [`project-card--${themes[theme]}`]: themes[theme],
      })}
      href={`/project/${slug}`}
    >
      <Heading level={3} className="project-card__title" theme="pinkUnderline">
        {title}
      </Heading>
      <p>{intro}</p>
      <Tags tags={tags} />
    </a>
  );
};

export default ProjectCard;
