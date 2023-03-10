import React from 'react';
import {Welcome} from "../components/Home/Welcome";
import {Container} from "../components/StyledComponents/Container";
import {AddButton} from "../components/Buttons/AddButton";
import {ListAllButton} from "../components/Buttons/ListAllButton";
import InfoCards from "../components/Home/InfoCards";
import {MainContainer} from "../components/StyledComponents/MainContainer";

const HomePage = () => {
    document.title = "Home";

    return(
        <MainContainer style={{height: '80vh'}}>
            <Welcome />
            <InfoCards />
            <Container>
                <AddButton />
                <ListAllButton />
            </Container>
        </MainContainer>
    )
}

export default HomePage;