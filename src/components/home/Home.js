import React, { Component } from 'react';
import { Jumbotron, Container, Button, ButtonGroup } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron style={JumbotronStyle}>
                    <h1 className="display-4">Circles!</h1>
                    <p className="lead">We will draw all your Venn and Euler Diagrams</p>
                    <ButtonGroup>
                        <Button style={ButtonStyle} size="lg" variant="outline-primary">Learn More</Button>
                        <Button style={ButtonStyle} size="lg" variant="primary">Learn More</Button>
                    </ButtonGroup>
                </Jumbotron>
            </Container>
        )
    }
}

const JumbotronStyle = {
    textAlign: "center"
}

const ButtonStyle = {
    margin: "0 .5em"
}

