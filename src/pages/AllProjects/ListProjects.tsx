import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";

interface Project {
    title: string;
    description: string;
    tech: string;
}

const ListProjects: React.FC = () => {
    document.title = "List of Projects";
    const navigate = useNavigate();
    const [data, setData] = useState<Project[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('project') || '{}');
        setData(saved);
    }, []);

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
            <div>
                {data ? <p>{data.map((item) => {return(<ul><li key={Math.random()}>{item.title}</li></ul>)})}</p>
                    : <p>Not found</p>}
            </div>
        </>
    )
}

export default ListProjects;