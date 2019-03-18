import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

// This component is for all the controls like updating and saving etc

class DiagramControls extends Component {
  render() {
    return (
      <div style={formStyle}>
        <div>
            <Button variant="danger" href="/dashboard" style={cancelButtonStyle}>Cancel</Button>
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

export default DiagramControls;