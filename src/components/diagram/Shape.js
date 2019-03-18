import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Shape extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" size="sm" style={buttonStyle}>{this.props.shape.name}</Button>
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