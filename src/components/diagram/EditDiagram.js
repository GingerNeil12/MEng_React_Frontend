import React, { Component } from 'react'
import { getDiagram } from '../../actions/diagramActions'
import Canvas from './Canvas'
import EditControls from './EditControls'

class EditDiagram extends Component {
    render() {
        return (
            <div style={formStyle}>
                <div style={sectionOne}>
                    <EditControls diagram={this.state.diagram} update={this.update} updateName={this.updateName} />
                </div>
                <div style={sectionTwo}>
                    <Canvas shapes={this.state.diagram.shapes} />
                </div>
                <div style={sectionThree}>
                    <p>Verification</p>
                </div>
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
