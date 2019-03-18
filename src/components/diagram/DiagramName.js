import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class DiagramName extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateName(this.state.name);
  }

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
                defaultValue={this.state.name}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group id="saveButton">
              <Button variant="primary" size="sm" style={buttonStyle} onClick={this.onSubmit}>Save Name</Button>
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