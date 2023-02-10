import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

interface Project {
    title: string;
    description: string;
    tech: string;
}

// interface Props {
//     projectsList?: Project[];
//     setProjectsList: (value: Project[]) => void;
// }

const AddProject: React.FC = () => {
    document.title = "New Project";
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tech, setTech] = useState<string>('');

    const handleTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleDescValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleTechValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTech(e.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(title === '' || description === '' || tech === '') {
            setError(true);
        } else {
            const addedProjects = JSON.parse(localStorage.getItem('project') || '{}')
                ? JSON.parse(localStorage.getItem('project') || '{}')
                : [];

            const addedProjectsArray: Project[] = Array.from(addedProjects);

            const newProject: Project[] = [
                ...addedProjectsArray,
                {
                    title,
                    description,
                    tech
                }
            ]
            localStorage.setItem('project', JSON.stringify(newProject));
            // props.setProjectsList(newProject);
        }
    }

    return(
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
            <br />
            <label>Enter project name</label>
            <input onChange={handleTitleValue}/>
            {error && <p style={{color: "red"}}>Please enter a project name</p>}
            <br />
            <label>Enter project description</label>
            <textarea style={{resize: "none"}} onChange={handleDescValue}></textarea>
            {error && <p style={{color: "red"}}>Please enter a description</p>}
            <br />
            <label>Enter technologies that you will use</label>
            <input onChange={handleTechValue}/>
            {error && <p style={{color: "red"}}>Please enter technology</p>}
            <button type="button" onClick={handleClick}>Add</button>
            <br />
        </>
    )
}

export default AddProject;