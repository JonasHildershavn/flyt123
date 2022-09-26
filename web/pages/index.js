import { NextPage } from 'next'
import groq from 'groq'
import client from '../client'

import PageLayout from '../components/page-layout/page-layout';
import ProjectOverview from '../components/project-overview/project-overview';

const Home = ({ projects }) => {
  return (
    <PageLayout>
      <ProjectOverview projects={projects} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const projects = await client.fetch(groq`
      *[_type == "project"]|order(publishedAt desc)
    `)
  return {
    props: {
      projects
    }
  }
}

export default Home
