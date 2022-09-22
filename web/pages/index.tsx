import type { NextPage } from 'next'

import PageLayout from '../components/page-layout/page-layout';
import ProjectOverview from '../components/project-overview/project-overview';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <ProjectOverview />
    </PageLayout>
  )
}

export default Home
