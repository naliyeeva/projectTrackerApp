import React from 'react';
import {Container} from "../StyledComponents/Container";
import {Card} from "../StyledComponents/Card";
import {Tag} from "../StyledComponents/Tag";

const InfoCards = () => {
    return(
        <Container>
            <Card>
                <Tag>#addProject</Tag>
                <p>Enter title, description,
                    and technology stack of your upcoming project and have it saved</p>
            </Card>
            <Card>
                <Tag>#listProjects</Tag>
                <p>Have a list of all your projects that you have added, navigate to the one you want</p>
            </Card>
            <Card>
                <Tag>#editProjects</Tag>
                <p>Want to make changes? No worries, you can update your
                    projects in the list section and save</p>
            </Card>
        </Container>
    )
}

export default InfoCards;