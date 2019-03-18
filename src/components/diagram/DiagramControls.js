import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DiagramName from './DiagramName';

// This component is for all the controls like updating and saving etc

class DiagramControls extends Component {
  render() {
    return (
      <div style={formStyle}>
        <div>
            <Button variant="danger" href="/dashboard" style={buttonStyle}>Cancel</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramName name={this.props.diagram.name} />
        </div>
        <div style={diagramControlComponentStyle}>
            <p>Diagram Update Goes here</p>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="secondary" style={buttonStyle}>Verify</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="success" style={buttonStyle}>Save</Button>
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

export default DiagramControls;