import cn from "classnames";

import Heading from "../heading/heading";
import LikeButton from "../like-button/like-button";

interface TasksProps {
  id: string;
  title: string;
  intro: string;
}

const TaskCard: React.FC<TasksProps> = ({ id, title, intro }) => (
  <div className="task-card">
    <Heading level={3} className="task-card__title" theme="pinkUnderline">
      {title}
    </Heading>
    <p className="task-card__intro">{intro}</p>
    <div className="task-card__like-button">
      <LikeButton target={id} />
    </div>
  </div>
);

export default TaskCard;
