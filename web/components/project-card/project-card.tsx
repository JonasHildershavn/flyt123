import LikeButton from "../like-button/like-button";

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
  <div className="project-card">
    <a
      key={_id}
      title={title}
      className="project-card__link"
      href={`project/${slug.current}`}
    >
      <h2 className="project-card__title">{title}</h2>
      <p>{intro}</p>
    </a>
    <LikeButton target={title} />
  </div>
);

export default ProjectCard;
