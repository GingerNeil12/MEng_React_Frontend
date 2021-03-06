import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ShapeUpdate from './ShapeUpdate'

class Shape extends Component {

    constructor(props){
        super(props)
        this.state = {
            show: false
        }

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    toggleDiv = () => {
        const { show } = this.state;
        this.setState({show : !show })
    }
  render() {
    return (
      <div>
        <Button variant="primary" size="sm" style={buttonStyle} onClick={this.toggleDiv}>{this.props.shape.name}</Button>
        {this.state.show && 
            <div style={updateStyle}>
              <ShapeUpdate key={this.props.shape.sid} shape={this.props.shape} update={this.props.update}/>
            </div>
        }
      </div>
    )
  }
}

const buttonStyle = {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em'
}

const updateStyle = {
  textAlign: 'center',
  float: 'center'
}

export default Shape;