import React, { Component } from 'react'
import Shape from './Shape'

class DiagramShapes extends Component {
  render() {
    return (
      <div style={formStyle}>
        {this.props.shapes.map((shape) => (
            <Shape key={shape.sid} shape={shape} update={this.props.update}/>
        ))}
      </div>
    )
  }
}

const formStyle = {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: '1px',
    boxSizing: 'border-box',
    paddingBottom: '1em'
}

export default DiagramShapes
