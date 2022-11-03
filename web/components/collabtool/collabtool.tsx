import React from "react";

import cn from "classnames";

export interface CollabtoolProps {
  title: string;
  url: string;
}
const Collabtool: React.FC<CollabtoolProps> = ({ title, url }) => (
  <div className="collabtool">
    <a className="collabtool__link" href={url}>
      {title}
    </a>
  </div>
);

export default Collabtool;
