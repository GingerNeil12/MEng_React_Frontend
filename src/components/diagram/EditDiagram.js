import React, { Component } from 'react'
import axios from 'axios'
import Canvas from './Canvas'
import EditControls from './EditControls'

class EditDiagram extends Component {
    constructor() {
        super();

        this.state = {
            diagram: {},
            loaded: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.diagramId;
        axios
            .get(`http://localhost:5000/api/diagram/id/${id}`)
            .then((result) => {
                this.setState({ diagram: result.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    update = (updateShape) => {
        this.setState({
            shapes: this.state.diagram.shapes.map(shape => {
                if (shape.sid === updateShape.sid) {
                    shape.name = updateShape.name;
                    shape.x = updateShape.x;
                    shape.y = updateShape.y;
                    shape.width = updateShape.width;
                    shape.color = updateShape.color
                }
                return shape;
            })
        })
        console.log(this.state.diagram)
    }

    updateName = (name) => {
        console.log(name)
    }

    content() {
        return (
            <div style={formStyle}>
                <div style={sectionOne}>
                    <EditControls diagram={this.state.diagram} update={this.update} updateName={this.updateName}/>
                </div>
                <div style={sectionTwo}>
                    <Canvas shapes={this.state.diagram.shapes} />
                </div>
                <div style={sectionThree}>
                    VERIFICATION
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state && this.state.diagram.shapes &&
                    this.content()
                }
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
