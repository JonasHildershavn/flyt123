import ProjectCard from "../project-card/project-card";
import { ProjectProps } from "../project/project";

interface ProjectOverviewProps {
   projects: ProjectProps[]
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
   projects
}) => (
   <main className="projects">
      <h2 className="projects__title">Prosjekter for alle sammen!</h2>
      <div className="projects__grid">
         {projects.length > 0 && projects.map(project => (
            <ProjectCard {...project} />
         ))}
      </div>
   </main>
)

export default ProjectOverview