import React, { useContext } from "react";

const WorkGif = (props) => {
    return (
        <img src={props.url} className="img img--vertical"></img>
    );
}

export default WorkGif;