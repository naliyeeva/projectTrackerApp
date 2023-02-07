import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";

const AddProject: React.FC = () => {
    document.title = "New Project";
    const navigate = useNavigate();
    // const title = useRef<HTMLInputElement>(null);
    // const description = useRef<HTMLTextAreaElement>(null);
    // const tech = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [tech, setTech] = useState<string>('');

    // const project = {
    //     title: title,
    //     description: description,
    //     tech: tech
    // }

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
    //     if(title.current!.value === '' || description.current!.value === '' || tech.current!.value === '') {
    //         setError(true);
    //     } else {
    //         // const project = {
    //         //     title: title.current!.value,
    //         //     description: description.current!.value,
    //         //     tech: tech.current!.value
    //         // }
    //         // localStorage.setItem('project', JSON.stringify(project));
    //         console.log(`Title is ${title.current!.value}, description is ${description.current!.value}, technology is ${tech.current!.value}`)
    //     }

        if(title === '' || description === '' || tech === '') {
            setError(true);
        } else {
            // interface Project {
            //     title: string,
            //     description: string,
            //     tech: string
            // }

            const addedProjects = JSON.parse(localStorage.getItem('project') || '{}')
                ? JSON.parse(localStorage.getItem('project') || '{}')
                : [];

            const addedProjectsArray = Array.from(addedProjects);

            const newProject = [
                ...addedProjectsArray,
                {
                    title,
                    description,
                    tech
                }
            ]
            console.log(newProject);

            localStorage.setItem('project', JSON.stringify(newProject));
            // console.log(`Title is ${title}, description is ${description}, technology is ${tech}`);
        }
    }

    // useEffect(() => {
    //     localStorage.setItem('project', JSON.stringify(project));
    // }, [project]);
    //
    // const addedProject = JSON.parse(localStorage.getItem('project') || '{}');


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