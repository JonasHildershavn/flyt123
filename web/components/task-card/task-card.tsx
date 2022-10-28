import cn from "classnames";

import Heading from "../heading/heading";

interface TasksProps {
  id: string;
  title: string;
  intro: string;
}

const TaskCard: React.FC<TasksProps> = ({ id, title, intro }) => (
  <div className="task-card">
    <Heading
      headingLevel="h3"
      className="task-card__title"
      theme="pinkUnderline"
    >
      {title}
    </Heading>
    <p className="task-card__intro">{intro}</p>
  </div>
);

export default TaskCard;
