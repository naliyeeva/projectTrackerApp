import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const AddProject = () => {
    const navigate = useNavigate();

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
            <input />
            <br />
            <label>Enter project description</label>
            <textarea></textarea>
            <br />
            <label>Enter technologies that you will use</label>
            <input />
            <button>Add</button>
            <br />
        </>
    )
}