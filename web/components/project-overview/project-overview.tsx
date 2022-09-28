import ProjectCard from "../project-card/project-card";
import { ProjectProps } from "../project/project";

interface ProjectOverviewProps {
   title: string
   projects: ProjectProps[]
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
   title,
   projects
}) => (
   <section className="projects">
      <h1 className="projects__title">{title}</h1>
      <div className="projects__grid">
         {projects.length > 0 && projects.map(project => (
            <ProjectCard {...project} />
         ))}
      </div>
   </section>
)

export default ProjectOverview