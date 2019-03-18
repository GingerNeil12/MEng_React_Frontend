import React, { Component } from 'react'
import DiagramControls from './DiagramControls'

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
                        width: 20,
                        color: '#ff0000'
                    },
                    {
                        id: 2,
                        name: 'B',
                        x: 200,
                        y: 200,
                        width: 20,
                        color: '#00ff00'
                    },
                    {
                        id: 3,
                        name: 'C',
                        x: 300,
                        y: 300,
                        width: 20,
                        color: '#0000ff'
                    }
                ]
            }
        }
    }

    update = (updateShape) => {
        this.setState({shapes: this.state.diagram.shapes.map
            (shape => {
                if(shape.id === updateShape.id){
                    shape.name = updateShape.name;
                    shape.x = updateShape.x;
                    shape.y = updateShape.y;
                    shape.width = updateShape.width;
                    shape.color = updateShape.color
                }
                return shape;
            })})
    }
  render() {
    return (
      <div style={formStyle}>
        <div style={sectionOne}>
            <DiagramControls diagram={this.state.diagram} update={this.update}/>
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