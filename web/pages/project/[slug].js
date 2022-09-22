import Project from '../../components/project/project'
import client from '../../client'
import groq from 'groq'

const ProjectPage = ({project}) => {
  // const { title = 'Missing title', name = 'Missing name',} = post
  return (
    <div>
      <Project title={project.title}/>
      <a>Forfatter: {project.name}</a>
    </div>
    
  )
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
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
      "name": author->name
}`


export default ProjectPage