
interface ProjectCardProps {
    _id: string
    title: string
    intro: string
    slug: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    _id,
    title,
    intro,
    slug,
}) => (
    <a key={_id} title={title} className="project__card" href={`project/${slug.current}`}>
        <h2>{title}</h2>
        <p>{intro}</p>
    </a>
)

export default ProjectCard