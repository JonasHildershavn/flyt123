import Project from '../../components/project/project'
import PageLayout from '../../components/page-layout/page-layout'
import client from '../../client'
import groq from 'groq'
import { Project as ProjectType } from '../../types/project'

const ProjectPage = ({project}: {project: ProjectType}) => {
  return (
    <PageLayout>
      <Project {...project}/>
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const paths: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params
  const project = await client.fetch(query, { slug })
  return {
    props: {
      project
    }
  }
}

const query = groq`*[_type == "project" && slug.current == $slug][0]{
      title,
      intro,
      description,
      completed,
      "author": author->name
}`


export default ProjectPage