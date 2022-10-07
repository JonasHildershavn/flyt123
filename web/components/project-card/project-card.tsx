interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  slug: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  slug,
}) => (
  <a
    key={_id}
    title={title}
    className="project-card"
    href={`project/${slug.current}`}
  >
    <h2 className="project-card__title">{title}</h2>
    <p>{intro}</p>
  </a>
);

export default ProjectCard;
