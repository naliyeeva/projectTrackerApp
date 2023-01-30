import {HomeButton} from "../Main/Buttons/HomeButton";

export const AddProject = () => {
    return(
        <>
            <HomeButton />
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