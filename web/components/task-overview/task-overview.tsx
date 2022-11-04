import { SanityProject } from "../../models/sanity-project";
import TaskCard from "../task-card/task-card";
import Container from "../container/container";
import Heading from "../heading/heading";

interface TaskOverviewProps {
  title: string;
}

const TaskOverview: React.FC<TaskOverviewProps> = ({ title }) => {
  return (
    <section className="task-overview">
      <Container className="task-overview__container" theme="wide">
        <Heading level={2} className="task-overview__title">
          {title}
        </Heading>
        <div className="task-overview__grid">
          <TaskCard
            id="salg"
            title="Salgsoppgaver"
            intro="Vil du bidra med salg? Her kan du gjøre sånn og sånn og bidra med dette og dette. Det er morsomt og lønnsomt for bedriften. Klikk deg inn for å se hva slags salgsoppgaver som tilgjengelige nå."
          />
          <TaskCard
            id="general"
            title="Generelle oppgaver"
            intro="Frister det å bidra til sosiale eller faglige arrangementer, fikse maler eller presentasjoner, eller noe annet som ikke går spesifikt på kunde? Klikk deg inn for å se hva slags andre generelle oppgaver som er tilgjengelige nå. "
          />
        </div>
      </Container>
    </section>
  );
};

export default TaskOverview;
