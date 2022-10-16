import React from "react";

export interface CollabtoolProps {
    title: string;
    url: string;
}
const Collabtool: React.FC<CollabtoolProps> = ({
    title,
    url,

}) => (
    <div className="collabtool">
        <a className="collabtool_link" href={url}>
        <p className="collabtool_title">{title}</p>
            
        </a>
    </div>

);

export default Collabtool;