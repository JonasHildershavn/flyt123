import React from "react";

import cn from "classnames";

export interface CollabtoolProps {
  title: string;
  url: string;
}
const Collabtool: React.FC<CollabtoolProps> = ({ title, url }) => (
  <div className="collabtool">
    <div className={cn("collabtool__spacer", "collabtool__spacer--left")} />
    <a className="collabtool__link" href={url}>
      {title}
    </a>
    <div className={cn("collabtool__spacer", "collabtool__spacer--right")} />
  </div>
);

export default Collabtool;
