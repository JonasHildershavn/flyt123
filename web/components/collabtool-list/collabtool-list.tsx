import React from "react";
import Collabtool, { CollabtoolProps } from "../collabtool/collabtool";

export interface CollabtoolListProps {
    collabtools: CollabtoolProps[];
}

const CollabtoolList: React.FC<CollabtoolListProps> = ({ collabtools }) => {
  return (
    <ul className="collabtool-list">
      {collabtools.map((collabtool, index) => (
        <li key={"collabtool"+index}  className="collabtool-item">
          <Collabtool {...collabtool} />
        </li>
      ))}
    </ul>
  )}

  export default CollabtoolList;
  