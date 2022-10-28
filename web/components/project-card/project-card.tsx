import cn from "classnames";

import Heading from "../heading/heading";
import Tag from "../tag/tag";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: any[];
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
}) => (
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
    <div className="project-card__tags">
      {tags &&
        tags.length > 0 &&
        tags.map((tag, index) => (
          <Tag key={tag.tag} color={""} text={tag.tag} />
        ))}
    </div>
  </a>
);

export default ProjectCard;
