import {useParams} from "react-router-dom";
import React from "react";

const ProjectDetails: React.FC = () => {
    document.title = "Details";
    // contains every dynamic route segment
    const params = useParams();

    return (
        <>
            <h1>Project details</h1>
            <p>{params.projectId}</p>
        </>
    )
}

export default ProjectDetails;

