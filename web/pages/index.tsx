import type { NextPage } from 'next'
import Link from 'next/link'
import groq from 'groq'
import client from '../client'

import PageLayout from '../components/page-layout/page-layout';
import ProjectOverview from '../components/project-overview/project-overview';

const Home: NextPage = ({projects}) => {
  return (
    <PageLayout>
      <ProjectOverview/>
      {projects.length > 0 && projects.map(
        ({ _id, title = '', slug = ''}) =>
          slug && (
            <li key={_id}>
              <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                <a>{title}</a>
              </Link>{' '}
              
            </li>
          )
      )}
    </PageLayout>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(groq`
      *[_type == "post"]`)
  return {
    props: {
      projects
    }
  }
}

export default Home
