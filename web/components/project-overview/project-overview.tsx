import cn from "classnames";

import ProjectCard from "../project-card/project-card";
import Container from "../container/container";

interface ProjectOverviewProps {
  title: string;
  projects: any[];
  theme?: string;
}

const themes: { [key: string]: string } = {
  green: "green",
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
      <h1 className="project-overview__title">{title}</h1>
      <div className="project-overview__grid">
        {projects.length > 0 &&
          projects.map((project, idx) => (
            <ProjectCard
              {...project}
              key={idx}
              theme={theme === "green" && "white"}
            />
          ))}
      </div>
    </Container>
  </section>
);

export default ProjectOverview;
