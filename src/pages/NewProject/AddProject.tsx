import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useRef, useState} from "react";

const AddProject: React.FC = () => {
    document.title = "New Project";
    const navigate = useNavigate();
    const title = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLTextAreaElement>(null);
    const tech = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<boolean>(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(title.current!.value === '' || description.current!.value === '' || tech.current!.value === '') {
            setError(true);
        } else {
            console.log(`Title is ${title.current!.value}, description is ${description.current!.value}, technology is ${tech.current!.value}`)
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
            <input ref={title}/>
            {error && <p style={{color: "red"}}>Please enter a project name</p>}
            <br />
            <label>Enter project description</label>
            <textarea ref={description} style={{resize: "none"}}></textarea>
            {error && <p style={{color: "red"}}>Please enter a description</p>}
            <br />
            <label>Enter technologies that you will use</label>
            <input ref={tech}/>
            {error && <p style={{color: "red"}}>Please enter technology</p>}
            <button type="button" onClick={handleClick}>Add</button>
            <br />
        </>
    )
}

export default AddProject;