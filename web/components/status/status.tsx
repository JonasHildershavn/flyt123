import cn from "classnames";

import Heading from "../heading/heading";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status = "Oppstartsfase" }) => {
  const statusOptions = ["Oppstartsfase", "Pågående", "Avsluttende fase"];
  return (
    <div className="status">
      <Heading headingLevel="h2">Status</Heading>
      <ul className="status__list">
        {statusOptions.map((option, index) => (
          <li
            key={option}
            className={cn(
              "status__item",
              {
                "status__item--active": status === option,
              },
              {
                "status__item--future": index > statusOptions.indexOf(status),
              }
            )}
          >
            <p>
              {option}
              {status === option && ", her er vi nå"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Status;
