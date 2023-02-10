import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

interface Project {
    title: string;
    description: string;
    tech: string;
}

interface Props {
    projectsList: Project[];
    setProjectsList?: (value: Project[]) => void;
    list: boolean;
}

const ListProjects: React.FC<Props> = (props) => {
    document.title = "List of Projects";
    const navigate = useNavigate();

    console.log(props.list)

    // consider fetching from some API
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
            {props.list && props.projectsList.map((item) => {
                return(<ul><li key={Math.random()}>{item.title}</li></ul>)
            })}
        </>
    )
}

export default ListProjects;