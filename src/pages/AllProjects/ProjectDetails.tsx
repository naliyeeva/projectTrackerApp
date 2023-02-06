import {useParams, json, useLoaderData} from "react-router-dom";
import {ProjectItem} from "./ProjectItem";

const ProjectDetails = () => {
    document.title = "Details";
    const params = useParams();
    // const data = useLoaderData();

    return (
        <>
            <h1>Project details</h1>
            <p>Project id: {params.projectId}</p>
            {/*<ProjectItem project={data} />*/}
        </>
    )
}

// export async function loader({request, params}) {
//     const id = params.projectId;
//
//     const response = await fetch('http://localhost:3000/projects/' + id);
//
//     if(!response.ok) {
//         throw json({message: 'Could not fetch details for selected project'})
//     }
//     else {
//         return response;
//     }
// }

export default ProjectDetails;

