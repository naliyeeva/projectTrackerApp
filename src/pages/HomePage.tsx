import {Welcome} from "../components/Home/Welcome";
import {Container} from "../components/StyledComponents/Container";
import {AddButton} from "../components/Buttons/AddButton";
import {ListAllButton} from "../components/Buttons/ListAllButton";
import InfoCards from "../components/Home/InfoCards";

const HomePage = () => {
    document.title = "Home";

    return(
        <>
            <Welcome />
            <InfoCards />
            <Container>
                <AddButton />
                <ListAllButton />
            </Container>
        </>
    )
}

export default HomePage;