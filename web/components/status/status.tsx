import cn from "classnames";

import Heading from "../heading/heading";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status = "Oppstartsfase" }) => {
  const statusOptions = ["Oppstart", "Pågående", "Vedlikehold"];
  return (
    <div className="status">
      <Heading level={2} className="status__title">
        Status
      </Heading>
      <ul className="status__list">
        {statusOptions.map((option, index) => (
          <li
            key={option}
            className={cn("status__item", {
              "status__item--active": status === option,
            })}
          >
            <p>{option}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Status;
