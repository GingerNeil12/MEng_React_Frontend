import React, { Component } from 'react'
import DiagramControls from './DiagramControls'
import Canvas from './Canvas'

class DiagramHome extends Component {
    constructor() {
        super();

        this.state = {
            diagram: {
                name: 'Untitiled',
                dataSet: 'a,ab,b,bc,c',
                shapes: [
                    {
                        sid: 1,
                        name: 'A',
                        x: 100,
                        y: 100,
                        width: 35,
                        color: '#ff0000'
                    },
                    {
                        sid: 2,
                        name: 'B',
                        x: 80,
                        y: 40,
                        width: 26,
                        color: '#00ff00'
                    },
                    {
                        sid: 3,
                        name: 'C',
                        x: 145,
                        y: 65,
                        width: 18,
                        color: '#0000ff'
                    }
                ]
            }
        }
    }

    update = (updateShape) => {
        this.setState({
            shapes: this.state.diagram.shapes.map(shape => {
                if (shape.sid === updateShape.sid) {
                    shape.name = updateShape.name;
                    shape.x = updateShape.x;
                    shape.y = updateShape.y;
                    shape.width = updateShape.width;
                    shape.color = updateShape.color
                }
                return shape;
            })
        })
        console.log(this.state.diagram)
    }

    updateName = (name) => {
        console.log(this.state.diagram);
    }

    render() {
        return (
            <div style={formStyle}>
                <div style={sectionOne}>
                    <DiagramControls diagram={this.state.diagram} update={this.update} updateName={this.updateName} />
                </div>
                <div style={sectionTwo}>
                    <Canvas shapes={this.state.diagram.shapes}/>
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