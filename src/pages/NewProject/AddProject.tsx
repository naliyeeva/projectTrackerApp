import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {StyledLink} from "../../components/Main/Buttons/StyledLink";
import {Input} from "../../components/Main/Input";
import {Form} from "../../components/Main/Form";
import {Textarea} from "../../components/Main/Textarea";
import {Button} from "../../components/Main/Button";

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
    const [techArray, setTechArray] = useState<string[]>([]);

    const handleTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    const handleDescValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    }

    const handleTechValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTech(e.target.value);
    }

    const handleTagClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setTechArray([...techArray, tech]);
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
            <StyledLink
                to="/"
                onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                }}
            >
                Home Page
            </StyledLink>
            <Form>
                <label>Enter project name</label>
                <Input onChange={handleTitleValue} />
                {error && <p style={{color: "red"}}>Please enter a project name</p>}
                <label>Enter project description</label>
                <Textarea style={{resize: "none"}} onChange={handleDescValue}></Textarea>
                {error && <p style={{color: "red"}}>Please enter a description</p>}
                <label>Enter technologies that you will use</label>
                <span>
                    <Input onChange={handleTechValue} style={{width: '70%'}}/>
                    {error && <p style={{color: "red"}}>Please enter technology</p>}
                    <Button style={{marginTop: '0', width: '18%'}} onClick={handleTagClick}>+</Button>
                    {techArray.map((item, index) => <span key={index}>#{item}</span>)}
                </span>
                <Button onClick={handleClick}>Add Your Project</Button>
            </Form>
        </>
    )
}

export default AddProject;
//  add design for tags
//  error validation for both + and add proj btn
