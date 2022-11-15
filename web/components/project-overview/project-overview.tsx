import cn from "classnames";

import ProjectCard from "../project-card/project-card";
import Container from "../container/container";
import Heading from "../heading/heading";

interface ProjectOverviewProps {
  title: string;
  projects: any[];
  theme?: string;
}

const themes: { [key: string]: string } = {
  green: "green",
  whiteBlueTone: "white-blue-tone",
  backgroundWhite: "background-white"

};

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title,
  projects,
  theme = "",
}) => (
  <section
    className={cn("project-overview", {
      [`project-overview--${themes[theme]}`]: themes[theme],
    })}
  >
    <Container className="project-overview__container" theme="wide">
      <div>
      Velkommen til Flyt! Her finner du en oversikt over prosjekter og oppgaver man kan gjøre ved ledig tid. Alt fra internprosjekter til å steke vafler på vaffelfredag!
      </div>
      <Heading headingLevel="h2" className="project-overview__title">
        {title}
      </Heading>
      <div className="project-overview__grid">
        {projects.length > 0 &&
          projects.map((project, idx) => (
            <ProjectCard {...project} key={idx} theme={"white"} />
          ))}
      </div>
    </Container>
  </section>
);

export default ProjectOverview;
