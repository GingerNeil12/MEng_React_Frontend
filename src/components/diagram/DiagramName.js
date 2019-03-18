import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class DiagramName extends Component {
  render() {
    return (
        <Form id="diagramNameForm" style={formStyle}>
            <Form.Group id="nameTextBox">
              <Form.Control 
                name="name"
                size="sm"
                type="text"
                placeholder="Diagram Name"
                style={textBoxStyle}
                value={this.props.name}
              />
            </Form.Group>
            <Form.Group id="saveButton">
              <Button variant="primary" size="sm" style={buttonStyle}>Save Name</Button>
            </Form.Group>
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

const textBoxStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '1em'
}

const buttonStyle = {
  width: '90%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default DiagramName;