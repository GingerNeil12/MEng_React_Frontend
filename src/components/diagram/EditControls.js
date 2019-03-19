import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DiagramName from './DiagramName'
import DiagramShapes from './DiagramShapes'

class EditControls extends Component {
  render() {
    return (
      <div style={formStyle}>
        <div>
            <Button variant="danger" href="/dashboard" style={buttonStyle}>Cancel</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramName name={this.props.diagram.name} updateName={this.props.updateName} />
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramShapes shapes={this.props.diagram.shapes} update={this.props.update}/>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="secondary" style={buttonStyle}>Verify</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="success" style={buttonStyle}>Update</Button>
        </div>
      </div>
    )
  }
}

const formStyle = {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const buttonStyle = {
    width: '100%',
    color: '#ffffff'
}

const diagramControlComponentStyle = {
    marginTop: '1em'
}

export default EditControls;