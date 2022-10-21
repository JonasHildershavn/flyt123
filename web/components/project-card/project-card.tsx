import cn from "classnames";

import Heading from "../heading/heading";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
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
  slug,
  theme = "",
}) => (
  <a
    key={_id}
    title={title}
    className={cn("project-card", {
      [`project-card--${themes[theme]}`]: themes[theme],
    })}
    href={`project/${slug.current}`}
  >
    <Heading
      headingLevel="h3"
      className="project-card__title"
      theme="pinkUnderline"
    >
      {title}
    </Heading>
    <p>{intro}</p>
  </a>
);

export default ProjectCard;
