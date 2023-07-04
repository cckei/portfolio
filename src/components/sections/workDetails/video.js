import React, { useContext } from "react";

const WorkVideo = (props) => {
    const data = `
        <video id="" playsInline="" autoPlay muted loop>
            <source src=${props.url} type="video/mp4" />
        </video>
    `
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: data
            }}
        >
        </div>        
    );
}

export default WorkVideo;