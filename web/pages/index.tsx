import { NextPage } from 'next'
import groq from 'groq'
import client from '../client'

import PageLayout from '../components/page-layout/page-layout';
import ProjectOverview from '../components/project-overview/project-overview';
import Hero from '../components/hero/hero';
import { Project } from '../types/project';

interface Props {
  uncompleted: Project[]
  completed: Project[]
}

const Home = ({ uncompleted, completed }: Props) => {
  return (
    <PageLayout>
      <Hero/>
      <ProjectOverview title="Pågående Flyt-prosjekter" projects={uncompleted}/>
      <ProjectOverview title="Ferdigstilte Flyt-prosjekter" projects={completed} />
    </PageLayout>
  )
}

export async function getStaticProps() {
  const uncompleted: Project[] = await client.fetch(groq`
      *[_type == "project" && completed == false]|order(publishedAt desc)
    `)
  const completed: Project[] = await client.fetch(groq`
      *[_type == "project" && completed == true]|order(publishedAt desc)
    `)
  return {
    props: {
      uncompleted,
      completed,
    }
  }
}

export default Home
