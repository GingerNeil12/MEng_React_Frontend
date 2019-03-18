import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class DiagramName extends Component {
  render() {
    return (
        <Form id="diagramName" style={formStyle}>
            <p>Name change goes here</p>
        </Form>
    )
  }
}

const formStyle = {
    width: '100%',
    borderStyle: 'dotted',
    borderWidth: '1px',
    boxSizing: 'border-box'
}

export default DiagramName;