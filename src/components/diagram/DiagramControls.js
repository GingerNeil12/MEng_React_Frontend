import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DiagramName from './DiagramName';

// This component is for all the controls like updating and saving etc

class DiagramControls extends Component {
  render() {
    return (
      <div style={formStyle}>
        <div>
            <Button variant="danger" href="/dashboard" style={cancelButtonStyle}>Cancel</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramName />
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

const cancelButtonStyle = {
    width: '100%',
    color: '#ffffff'
}

const diagramControlComponentStyle = {
    marginTop: '1em'
}

export default DiagramControls;