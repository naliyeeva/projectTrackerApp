import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {StyledLink} from "../../components/Main/Buttons/StyledLink";
import {Input} from "../../components/Main/Input";
import {Form} from "../../components/Main/Form";
import {Textarea} from "../../components/Main/Textarea";
import {Button} from "../../components/Main/Button";
import {TechTag} from "../../components/Main/TechTag";
import {TechStack} from "../../components/Main/TechStack";
import Swal from 'sweetalert2';

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
        e.preventDefault();
        tech !== '' && setTechArray([...techArray, tech]);
        setTech('');
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(title === '' || description === '' || techArray.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You should fill in all inputs!'
            })
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
            Swal.fire({
                icon: 'success',
                title: 'Your project has been added!',
                text: 'Now you can find it in the lists section'
            })
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
                <Input onChange={handleTitleValue} value={title} />
                <label>Enter project description</label>
                <Textarea style={{resize: "none"}} onChange={handleDescValue} value={description}></Textarea>
                <label>Enter technologies that you will use</label>
                <span>
                    <Input onChange={handleTechValue} style={{width: '80%'}} value={tech}/>
                    <Button style={{marginTop: '0', width: '12%'}} onClick={handleTagClick}>+</Button>
                    <TechStack>
                        {techArray.map((item, index) => <TechTag key={index}>#{item}</TechTag>)}
                    </TechStack>
                </span>
                <Button onClick={handleClick}>Add Your Project</Button>
            </Form>
        </>
    )
}

export default AddProject;
