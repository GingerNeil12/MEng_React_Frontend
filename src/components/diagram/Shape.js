import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Shape extends Component {
  render() {
    return (
      <div>
        <Button variant="primary" size="sm">{this.props.shape.name}</Button>
      </div>
    )
  }
}

export default Shape;