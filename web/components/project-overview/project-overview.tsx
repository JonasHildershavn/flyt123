import { ProjectProps } from "../project/project";
import Link from 'next/link'

interface ProjectOverviewProps {
   projects: ProjectProps[]
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
   projects
}) => (
   <main className="overview">
      <h1>Prosjekter for alle sammen!</h1>

      {projects.length > 0 && projects.map(
         ({ _id, title = '', intro = '', slug = '', publishedAt = '' }) =>
            slug && (
               <div key={_id} className="project">

                  <Link href="/project/[slug]" as={`/project/${slug.current}`}>
                     <h2>{title}</h2>
                     
                  </Link>{' '}
                  <a>{intro}</a>
               </div>
            )
      )}


   </main>
)

export default ProjectOverview