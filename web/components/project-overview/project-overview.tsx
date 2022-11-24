import cn from "classnames";

import ProjectCard from "../project-card/project-card";
import Container from "../container/container";
import Heading from "../heading/heading";

interface ProjectOverviewProps {
  title: string;
  projects: any[];
  theme?: string;
  cardTheme?: string;
  likable?: boolean;
}

const themes: { [key: string]: string } = {
  green: "green",
};

const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title,
  projects,
  theme = "",
  cardTheme,
  likable = true,
}) => (
  <section
    className={cn("project-overview", {
      [`project-overview--${themes[theme]}`]: themes[theme],
    })}
  >
    <Container className="project-overview__container" theme="wide">
      <Heading level={2} className="project-overview__title">
        {title}
      </Heading>
      <div className="project-overview__grid">
        {projects.length > 0 &&
          projects.map((project, idx) => (
            <ProjectCard
              {...project}
              key={idx}
              theme={cardTheme}
              likable={likable}
            />
          ))}
      </div>
    </Container>
  </section>
);

export default ProjectOverview;
