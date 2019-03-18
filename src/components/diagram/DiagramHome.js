import React, { Component } from 'react'
import DiagramControls from './DiagramControls'

// This is for the layout and will control the shapes etc

class DiagramHome extends Component {
    constructor() {
        super();

        this.state = {
            diagram: {
                name: 'Untitiled',
                data: 'a,ab,b,bc,c',
                shapes: [
                    {
                        id: 1,
                        name: 'A',
                        x: 250,
                        y: 250,
                        color: '#ff0000'
                    },
                    {
                        id: 2,
                        name: 'B',
                        x: 200,
                        y: 200,
                        color: '#00ff00'
                    },
                    {
                        id: 3,
                        name: 'C',
                        x: 300,
                        y: 300,
                        color: '#0000ff'
                    }
                ]
            }
        }
    }
  render() {
    return (
      <div style={formStyle}>
        <div style={sectionOne}>
            <DiagramControls diagram={this.state.diagram}/>
        </div>
        <div style={sectionTwo}>
            <p>Diagram</p>
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

export default DiagramHome;