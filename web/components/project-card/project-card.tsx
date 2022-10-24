import Tag from "../tag/tag";

interface ProjectCardProps {
  _id: string;
  title: string;
  intro: string;
  tags: any[];
  slug: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  _id,
  title,
  intro,
  tags,
  slug,
}) => (
  <a
    key={_id}
    className="project-card"
    href={`/project/${slug}`}
  >
    <h2 className="project-card__title">{title}</h2>
    <p>{intro}</p>
    <div className="project-card__tags">
      {
        tags !== undefined ? tags.map(tag => (
          <Tag color={""} text={tag.tag}/>
        )) : <></>
      }
    </div>
  </a>
);

export default ProjectCard;
