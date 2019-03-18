import React, { Component } from 'react'

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shapes: this.props.shapes
        }
    }

    componentDidMount(){
        this.updateCanvas();
    }
    componentWillUpdate(){
        this.updateCanvas();
    }

    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
        this.state.shapes.map(shape => {
            ctx.beginPath();

            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = 'purple';
            ctx.arc(shape.x, shape.y, shape.width, 0, 2 * Math.PI);
            ctx.fillStyle = shape.color;
            ctx.fill();

            ctx.globalAlpha = 1.0;
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillStyle = '#000000';
            ctx.fillText(shape.name, shape.x, shape.y);
            ctx.stroke();
        })
    }

    render() {
        return (
            <div style={canvasPanel}>
                <canvas ref="canvas" style={canvas}></canvas>
            </div>
        )
    }
}

const canvasPanel = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const canvas = {
    width: '100%',
    height: '100%',
    margin: 'auto'
}

export default Canvas;
