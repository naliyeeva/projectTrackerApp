import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useRef, useState} from "react";

const AddProject: React.FC = () => {
    document.title = "New Project";
    const navigate = useNavigate();
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const tech = useRef<HTMLInputElement>(null);


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`Title is ${title.current!.value}, description is ${description.current!.value}, technology is ${tech.current!.value}`);
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
            <input ref={title}/>
            <br />
            <label>Enter project description</label>
            <textarea ref={description}></textarea>
            <br />
            <label>Enter technologies that you will use</label>
            <input ref={tech}/>
            <button type="button" onClick={handleClick}>Add</button>
            <br />
        </>
    )
}

export default AddProject;