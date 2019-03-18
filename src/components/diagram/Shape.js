import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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

export default Shape;