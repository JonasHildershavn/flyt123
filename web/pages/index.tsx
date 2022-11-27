import { NextPage } from "next";
import groq from "groq";
import client from "../clients/sanity-client";

import PageLayout from "../components/page-layout/page-layout";
import ProjectOverview from "../components/project-overview/project-overview";
import Hero from "../components/hero/hero";
import { SanityProject } from "../models/sanity-project";
import CtaAvailableBanner from "../components/cta-available-banner/cta-available-banner";
import TaskOverview from "../components/task-overview/task-overview";
import { useEffect, useState } from "react";
import { AzureVacant } from "../models/azure-vacant";

interface Props {
  uncompleted: SanityProject[];
  completed: SanityProject[];
}

const Index: NextPage<Props> = ({ uncompleted, completed }) => {
  const getVacant = async () => {
    const vacantMail = "navn@email.com";
    const resp = await fetch("/api/vacant/" + vacantMail);
    const json = await resp.json();

    setExistingVacant(json);
  };

  const [existingVacant, setExistingVacant] = useState<AzureVacant>();

  useEffect(() => {
    getVacant();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      "likes",
      JSON.stringify(existingVacant?.prefProject.split(", "))
    );
    window.dispatchEvent(new Event("storage"));
  }, [existingVacant]);

  return (
    <PageLayout title="Flyt">
      <Hero />
      <ProjectOverview
        title="Internprosjekter"
        projects={uncompleted}
        cardTheme="muddish"
      />
      <TaskOverview title="Annet" />
      <CtaAvailableBanner />
      <ProjectOverview
        title="Tidligere internprosjekter"
        projects={completed}
        cardTheme="lime"
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
