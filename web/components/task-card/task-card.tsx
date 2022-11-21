import cn from "classnames";
import { useEffect, useState } from "react";

import Heading from "../heading/heading";
import LikeButton from "../like-button/like-button";

interface TasksProps {
  id: string;
  title: string;
  intro: string;
}

const TaskCard: React.FC<TasksProps> = ({ id, title, intro }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (val: boolean) => {
    setIsLiked(val);
  };

  useEffect(() => {
    setIsLiked(
      (localStorage.getItem("likes") !== null
        ? JSON.parse(String(localStorage.getItem("likes")))
        : []
      ).includes(id)
    );
  }, [id]);

  return (
    <div
      className={cn("task-card", {
        "task-card--liked": isLiked,
      })}
    >
      <Heading level={3} className="task-card__title">
        {title}
      </Heading>
      <p className="task-card__intro">{intro}</p>
      <div className="task-card__like-button">
        <LikeButton target={id} like={handleLike} />
      </div>
    </div>
  );
};

export default TaskCard;
