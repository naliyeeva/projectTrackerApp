import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {StyledLink} from "../../components/StyledComponents/StyledLink";
import {Input} from "../../components/StyledComponents/Input";
import {Form} from "../../components/StyledComponents/Form";
import {Textarea} from "../../components/StyledComponents/Textarea";
import {Button} from "../../components/StyledComponents/Button";
import {TechTag} from "../../components/StyledComponents/TechTag";
import {TechStack} from "../../components/StyledComponents/TechStack";
import Swal from 'sweetalert2';

interface Project {
    title: string;
    description: string;
    tech?: string;
    techArray: string[]
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

    const handleTitleValue = (e: React.ChangeEvent<HTMLInputElement>) : void => {
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
        const projectFromStorage = localStorage.getItem('project')
        if(title === '' || description === '' || techArray.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You should fill in all inputs!'
            })
        } else {
            const addedProjects = JSON.parse(localStorage.getItem('project') || '{}')
                ?
                JSON.parse(projectFromStorage ?? "")
                : [];

            const addedProjectsArray: Project[] = Array.from(addedProjects);

            const newProject: Project[] = [
                ...addedProjectsArray,
                {
                    title,
                    description,
                    techArray
                }
            ]
            localStorage.setItem('project', JSON.stringify(newProject));
            Swal.fire({
                icon: 'success',
                title: 'Your project has been added!',
                text: 'Now you can find it in the lists section'
            })
            // props.setProjectsList(newProject);
            setTitle('');
            setDescription('');
            setTechArray([]);
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
