import React, { Component } from 'react'

class DiagramShapes extends Component {
  render() {
    return (
      <div style={formStyle}>
        <p>Update</p>
      </div>
    )
  }
}

const formStyle = {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: '1px',
    boxSizing: 'border-box'
}

export default DiagramShapes
