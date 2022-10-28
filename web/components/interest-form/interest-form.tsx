import React, { useState } from "react";
import Heading from "../heading/heading";

import cn from "classnames";

const fields = [
  {
    id: "name",
    label: "Hva er navnet ditt?",
    type: "text",
    required: true,
  },
  {
    id: "work",
    label: "Hva jobber du som?",
    type: "text",
    required: true,
  },
  {
    id: "interest",
    label: "Hva er du interessert i?",
    type: "text",
    required: true,
  },
];

const motivation = [
  "Jeg vil bli enda bedre på skillsa mine!",
  "Jeg vil utvikle nye skills",
  "Jeg vil jobbe i et tverrfaglig prosjekt",
  "Jeg vil bli kjent med flere kollegaer<3",
  "Jeg synes prosjektet virker kult!",
  "Jeg vil bare ha noe å gjøre",
];

const InterestForm: React.FC = () => {
  return (
    <div className="interest-form">
      <Heading headingLevel="h1" className="interest-form__title">
        Min side
      </Heading>
      <form className="interest-form__form" action={"#"} method="get">
        {fields &&
          fields.map(({ id, label, type, required }) => {
            const [isInvalid, setIsInvalid] = useState(false);
            return (
              <div className="interest-form__field-wrapper" key={id}>
                <label className="interest-form__field-label" htmlFor={id}>
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  className="interest-form__field-input"
                  type={type}
                  required={required}
                  onInvalid={() => setIsInvalid(true)}
                  onInput={() => setIsInvalid(false)}
                />
              </div>
            );
          })}
        <div>Prosjekter</div>
        {
          <div className="interest-form__motivation">
            <Heading headingLevel="h2">Hvorfor vil du være med?</Heading>
            <ul className="interest-form__motivation-list">
              {motivation.map((title, index) => (
                <li
                  key={"motivation" + index}
                  className="interest-form__motivation-li"
                >
                  <label
                    className="ordering-form__field-label"
                    htmlFor={"motivation" + index}
                  >
                    {title}
                  </label>
                  <input
                    id={"motivation" + index}
                    name={"motivation" + index}
                    className="interest-form__motivation-input"
                    type="checkbox"
                  />
                </li>
              ))}
            </ul>
          </div>
        }
        <div>Kapasitet</div>
        <div className="interest-form__buttons">
          <button>Tilbake til forside</button>
          <button type="submit">Meld interesse</button>
        </div>
      </form>
    </div>
  );
};

export default InterestForm;
