import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {StyledLink} from "../../components/StyledComponents/StyledLink";
import {ProjectCard} from "../../components/StyledComponents/ProjectCard";
import {TechTag} from "../../components/StyledComponents/TechTag";
import {Container} from "../../components/StyledComponents/Container";
import {TitleLink} from "../../components/StyledComponents/TitleLink";
import {Project} from "../../types";

const ListProjects: React.FC = () => {
    document.title = "List of Projects";
    const navigate = useNavigate();
    const [data, setData] = useState<Project[]>([]);

    useEffect(() => {
        const saved = JSON.parse(sessionStorage.getItem('project') || '{}');
        setData(saved);
    }, []);

    const getRandomColor = (): string => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // consider fetching from some API
    return (
        <>
            <StyledLink
                to="/"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                Home Page
            </StyledLink>
            <Container>
                {data ? data.map((item) => {return(
                    <ProjectCard style={{border: '1px solid white'}} key={Math.random()}>
                        <div style={{background: getRandomColor(), width: '100%', height: '30px'}}></div>
                        <div style={{padding: '10px'}}>
                            <h3><TitleLink to={`/projects/${item.title}`}>{item.title}</TitleLink></h3>
                            <p><i>{item.description}</i></p>
                            <div>{item.techArray.map((technology) => {
                                return(
                                    <TechTag key={Math.random()}>#{technology}</TechTag>
                                )
                            })}</div>
                        </div>
                    </ProjectCard>
                    )})
                    : <p>Not found</p>}
            </Container>
        </>
    )
}

export default ListProjects;