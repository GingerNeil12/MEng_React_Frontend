import React, { Component } from 'react'

class NewDiagram extends Component {
  render() {
    return (
      <div style={newDiagramConatiner}>
        <h1>NEW DIAGRAM</h1>
      </div>
    )
  }
}

const newDiagramConatiner = {
  width: '80%',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '2em'
}

export default NewDiagram;
