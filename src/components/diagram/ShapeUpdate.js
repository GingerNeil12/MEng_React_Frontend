import React, { Component } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'

class ShapeUpdate extends Component {
  constructor(props){
    super(props);

    this.state = {
      sid: this.props.shape.sid,
      name: this.props.shape.name,
      x: this.props.shape.x,
      y: this.props.shape.y,
      width: this.props.shape.width,
      color: this.props.shape.color,
      updateShape: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const shape = {
      sid: this.state.sid,
      name: this.state.name,
      x: this.state.x,
      y: this.state.y,
      width: this.state.width,
      color: this.state.color
    };

    if(shape.width <= 0 || shape.color.length === 0){
      alert('Width and Color must have a value')
    } else {
      this.setState({updateShape: {
        sid: shape.sid,
        name: shape.name,
        x: shape.x,
        y: shape.y,
        width: shape.width,
        color: shape.color
      }}, () => {
        this.props.update(this.state.updateShape);
      })
    }
  }

  render() {
    return (
      <Form id="shapeUpdateForm" style={formStyle}>
        <Form.Group as={Row} id="shapeName" style={groupStyle}>
          <Form.Label column sm="5">Name</Form.Label>
          <Col sm="6">
            <Form.Control 
              name="name"
              type="text"
              size="sm"
              defaultValue={this.props.shape.name}
              onChange={this.onChange}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="xCoOrd" style={groupStyle}>
          <Form.Label column sm="5">X</Form.Label>
          <Col sm="6">
            <Form.Control
              name="x"
              type="number"
              size="sm"
              min="0"
              defaultValue={this.props.shape.x}
              onChange={this.onChange}/>   
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="yCoOrd" style={groupStyle}>
          <Form.Label column sm="5">Y</Form.Label>
          <Col sm="6">
            <Form.Control
              name="y"
              type="number"
              size="sm"
              min="0"
              defaultValue={this.props.shape.y}
              onChange={this.onChange}/>   
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="width" style={groupStyle}>
          <Form.Label column sm="5">Width</Form.Label>
          <Col sm="6">
            <Form.Control
              name="width"
              type="number"
              size="sm"
              min="0"
              defaultValue={this.props.shape.width}
              onChange={this.onChange}/>   
          </Col>
        </Form.Group>
        <Form.Group as={Row} id="color" style={groupStyle}>
          <Form.Label column sm="5">Color</Form.Label>
          <Col sm="6">
            <Form.Control
              name="Color"
              type="text"
              size="sm"
              defaultValue={this.props.shape.color}
              onChange={this.onChange}/>   
          </Col>
        </Form.Group>
        <Form.Group id="submit">
          <Button variant="success" size="sm" onClick={this.onSubmit}>Update</Button>
        </Form.Group>
      </Form>
    )
  }
}

const formStyle = {
  width:  '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '.5em'
}

const groupStyle = {
  marginTop: '.5em',
  padding: '0'
}

export default ShapeUpdate;
