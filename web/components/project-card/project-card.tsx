import Link from "next/link"

interface ProjectCardProps {
    _id: string
    title: string
    intro: string
    slug: any
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    _id,
    title,
    intro,
    slug,
}) => (
    <Link key={_id} title={title}href={`project/${slug.current}`}>
        <a className="project__card">
            <h2>{title}</h2>
            <p>{intro}</p>
        </a>
        
    </Link>
)

export default ProjectCard