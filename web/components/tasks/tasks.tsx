import cn from "classnames";

import Heading from "../heading/heading";

interface TasksProps {
  tasks: string[];
}

const color: { [key: string]: string } = {
  dev: "tasks__list-item--red",
  des: "tasks__list-item--blue",
  cat: "tasks__list-item--green",
};

const text: any = {
  dev: "utvikler",
  des: "design",
  cat: "katt",
};

const Tasks: React.FC<TasksProps> = ({ tasks }) => (
  <div className="tasks">
    <Heading headingLevel="h2" className="tasks__title">
      Noen oppgaver vi trenger hjelp med
    </Heading>
    {tasks && tasks.length > 0 && (
      <ul className="tasks__list">
        {tasks.map((task, index) => (
          <li
            key={"needs-" + index}
            className={cn("tasks__list-item", color[task])}
          >
            Vi har masse {text[task]}-jobber! Please hjelp oss
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Tasks;
