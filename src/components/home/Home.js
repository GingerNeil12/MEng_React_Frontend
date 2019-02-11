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
                        <Button style={ButtonStyle} size="lg" variant="outline-primary">
                            <a href="https://en.wikipedia.org/wiki/Venn_diagram" target="_" style={LinkStyle}>Go To Venn</a>
                        </Button>
                        <Button style={ButtonStyle} size="lg" variant="outline-primary">
                            <a href="https://en.wikipedia.org/wiki/Euler_diagram" target="_" style={LinkStyle}>Go To Euler</a>
                        </Button>
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

const LinkStyle = {
    textDecoration: "none",
    color: "inherit"
}

