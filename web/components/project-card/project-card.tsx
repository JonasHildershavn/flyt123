import cn from "classnames";

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
    <h2 className="project-card__title">{title}</h2>
    <p>{intro}</p>
  </a>
);

export default ProjectCard;
