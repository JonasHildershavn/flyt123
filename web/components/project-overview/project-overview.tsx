import { SanityProject } from "../../models/sanity-project";
import ProjectCard from "../project-card/project-card";

interface ProjectOverviewProps {
   title: string
   projects: any[]
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
   title,
   projects
}) => (
   <section className="projects">
      <h1 className="projects__title">{title}</h1>
      <div className="projects__grid">
         {projects.length > 0 && projects.map((project, idx) => (
            <ProjectCard {...project} key={idx} />
         ))}
      </div>
   </section>
)

export default ProjectOverview