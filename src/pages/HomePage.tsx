import {Welcome} from "../components/Main/Welcome/Welcome";
import {Container} from "../components/Main/Buttons/Container";
import {AddButton} from "../components/Main/Buttons/AddButton";
import {ListAllButton} from "../components/Main/Buttons/ListAllButton";

export const HomePage = () => {
    return(
        <>
            <Welcome />
            <Container>
                <AddButton />
                <ListAllButton />
            </Container>
        </>
    )
}