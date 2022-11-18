import React from "react";
import client from "../../clients/sanity-client";
import imageUrlBuilder from "@sanity/image-url";

import LinkButton from "../link-button/link-button";

export interface CollabtoolListProps {
  collabtools: any[];
}

function urlFor(source: string) {
  return imageUrlBuilder(client).image(source);
}

const CollabtoolList: React.FC<CollabtoolListProps> = ({ collabtools }) => {
  console.log(collabtools);
  return (
    <ul className="collabtool-list">
      {collabtools &&
        collabtools.length > 0 &&
        collabtools.map(({ collabtool, url }, index) => (
          <li key={"collabtool" + index} className="collabtool-list__item">
            <img src={collabtool.image} alt="" />
            <LinkButton
              text={collabtool.title}
              href={url}
              hrefShouldOpenInNewTab
              theme="tag"
            />
          </li>
        ))}
    </ul>
  );
};

export default CollabtoolList;
