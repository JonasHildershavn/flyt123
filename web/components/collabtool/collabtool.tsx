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
            <div>
                <h3 className="collabtool_title">{title}</h3>
            </div>
        </a>
    </div>

);

export default Collabtool;