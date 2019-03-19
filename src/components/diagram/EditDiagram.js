import React, { Component } from 'react'
import axios from 'axios'
import Canvas from './Canvas'
import EditControls from './EditControls'

class EditDiagram extends Component {
    constructor(){
        super();

        this.state = {
            diagram: {}
        }
    }
    componentDidMount() {
        let diagramId = this.props.match.params.diagramId;
        axios
            .get(`http://localhost:5000/api/diagram/id/${diagramId}`)
            .then((result) => {
                console.log(result.data);
                this.setState({diagram: result.data});
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onClick = (e) => {
        console.log(this.state.diagram);
    }

    render() {
        return (
            <div style={formStyle}>
                <button onClick={this.onClick.bind(this)}>Push Me</button>
            </div>
        )
    }
}

const formStyle = {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    display: 'flex',
    textAlign: 'center'
}

const sectionOne = {
    flex: '1'
}

const sectionTwo = {
    flex: '3'
}

const sectionThree = {
    flex: '1'
}

export default EditDiagram;
