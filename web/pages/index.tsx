import { NextPage } from "next";
import groq from "groq";
import client from "../clients/sanity-client";

import PageLayout from "../components/page-layout/page-layout";
import ProjectOverview from "../components/project-overview/project-overview";
import Hero from "../components/hero/hero";
import { SanityProject } from "../models/sanity-project";
import CtaAvailableBanner from "../components/cta-available-banner/cta-available-banner";
import TaskOverview from "../components/task-overview/task-overview";

interface Props {
  uncompleted: SanityProject[];
  completed: SanityProject[];
}

const Index: NextPage<Props> = ({ uncompleted, completed }) => {
  return (
    <PageLayout title="Flyt">
      <Hero />
      <ProjectOverview title="Internprosjekter" projects={uncompleted} />
      <TaskOverview title="Annet" />
      <CtaAvailableBanner />
      <ProjectOverview
        title="Tidligere internprosjekter"
        projects={completed}
        cardTheme="black"
        likable={false}
      />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const uncompleted: SanityProject[] = await client.fetch(query, {
    completed: false,
  });
  const completed: SanityProject[] = await client.fetch(query, {
    completed: true,
  });
  return {
    props: {
      uncompleted,
      completed,
    },
  };
}

const query = groq`*[_type == "project" && completed == $completed]{
  title,
  intro,
  description,
  completed,
  "slug":slug.current,
  status,
  "employee": employee->name,
  "contactPersons": contactPersons[]->{employee->{name}, role},
  contributors[]->{name},
  "tags": tags[]->{tag,category}
}|order(publishedAt desc)`;

export default Index;
