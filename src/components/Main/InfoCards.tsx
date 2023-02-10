import {Container} from "./Buttons/Container";
import {Card} from "./Card";

const InfoCards = () => {
    return(
        <Container>
            <Card>
                <h4>#addNewProject</h4>
                <p>Enter title, description,
                    and technology stack of your upcoming project and have it saved</p>
            </Card>
            <Card>
                <h4>#listAvailableProjects</h4>
                <p>Have a list of all your projects that you have added, navigate to the one you want</p>
            </Card>
            <Card>
                <h4>#editProjects</h4>
                <p>Want to make changes? No worries, you can update your
                    projects in the list section and save</p>
            </Card>
        </Container>
    )
}

export default InfoCards;