import React, { Component } from 'react'

class NewDiagram extends Component {
  render() {
    return (
      <div style={newDiagramConatiner}>
        <div style={sectionOne}>
          <p>DIAGRAM CONTROLS</p>
        </div>
        <div style={sectionTwo}>
          <p>DIAGRAM GOES HERE</p>
        </div>
        <div style={sectionThree}>
          <p>VERIFY</p>
        </div>
      </div>
    )
  }
}

const newDiagramConatiner = {
  width: '90%',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginTop: '2em',
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

export default NewDiagram;
