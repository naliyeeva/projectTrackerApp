import {Link, useNavigate} from "react-router-dom";

const ListProjects = () => {
    document.title = "List of Projects";
    const navigate = useNavigate();
    // const projects = useLoaderData();

    // consider fetching from some API
    const PROJECTS = [
        {id: 1, title: 'Project 1'},
        {id: 2, title: 'Project 2'},
        {id: 3, title: 'Project 3'}
    ];

    return (
        <>
            <Link
                to="/"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                Home Page
            </Link>
            <h1>Your projects will be listed here!</h1>
            <ul>
                {PROJECTS.map(project => (<li key={project.id}>
                    <Link to={`/projects/${project.id}`}>{project.title}</Link>
                </li>))}
            </ul>
        </>
    )
}

export default ListProjects;