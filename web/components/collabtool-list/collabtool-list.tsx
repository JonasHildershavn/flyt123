import React from "react";
import Collabtool, { CollabtoolProps } from "../collabtool/collabtool";

export interface CollabtoolListProps {
    collabtools: CollabtoolProps[];
}

const CollabtoolList: React.FC<CollabtoolListProps> = ({ collabtools }) => {
  return (
    <ul className="collabtool-list">
      {collabtools.map((collabtool) => (
        <li className="collabtool-item">
          <Collabtool {...collabtool} />
        </li>
      ))}
    </ul>
  )}

  export default CollabtoolList;
  