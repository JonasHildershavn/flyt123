import React from "react";
import LinkButton from "../link-button/link-button";

export interface CollabtoolListProps {
  collabtools: any[];
}

const CollabtoolList: React.FC<CollabtoolListProps> = ({ collabtools }) => {
  return (
    <ul className="collabtool-list">
      {collabtools.map((collabtool, index) => (
        <li key={"collabtool" + index} className="collabtool-list__item">
          <LinkButton
            text={collabtool.title}
            href={collabtool.url}
            hrefShouldOpenInNewTab
            theme="tag"
          />
        </li>
      ))}
    </ul>
  );
};

export default CollabtoolList;
