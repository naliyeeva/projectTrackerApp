import {useParams} from "react-router-dom";

export const ProjectDetails = () => {
    const params = useParams();

    return (
        <>
            <h1>Project details</h1>
            <p>Project id: {params.projectId}</p>
        </>
    )
}