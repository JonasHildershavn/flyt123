import Project from "../../components/project/project";
import PageLayout from "../../components/page-layout/page-layout";
import client from "../../clients/sanity-client";
import groq from "groq";
import { SanityProject } from "../../models/sanity-project";

const ProjectPage = ({
  project,
  slug,
}: {
  project: SanityProject;
  slug: string;
}) => {
  return (
    <PageLayout title={project.title}>
      <Project {...project} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  const paths: string[] = await client.fetch(
    `*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const project = await client.fetch(query, { slug });
  return {
    props: {
      project,
      slug,
    },
  };
}

const query = groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      intro,
      description,
      completed,
      status,
      collabtools[]{
        collabtool->{title, image},
        url
      },
      "employee": employee->name,
      "contactPersons": contactPersons[]->{employee->{name}, role},
      contributors[]->{name},
      "tags": tags[]->{tag, category}
}`;

export default ProjectPage;
