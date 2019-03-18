import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import DiagramName from './DiagramName';
import DiagramShapes from './DiagramShapes'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

// This component is for all the controls like updating and saving etc

class DiagramControls extends Component {
  constructor(props){
    super(props);

    this.onSave = this.onSave.bind(this);
  }

  onSave = (e) => {
    e.preventDefault();
    let diagram = this.props.diagram;
    axios
        .post('http://localhost:5000/api/diagram/user', diagram)
        .then(result => {
          alert('Diagram Saved!');
          this.props.history.push('/dashboard');
        })
        .catch(errors => console.log(errors));
  }

  render() {
    return (
      <div style={formStyle}>
        <div>
            <Button variant="danger" href="/dashboard" style={buttonStyle}>Cancel</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramName name={this.props.diagram.name} updateName={this.props.updateName} />
        </div>
        <div style={diagramControlComponentStyle}>
            <DiagramShapes shapes={this.props.diagram.shapes} update={this.props.update}/>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="secondary" style={buttonStyle}>Verify</Button>
        </div>
        <div style={diagramControlComponentStyle}>
            <Button variant="success" style={buttonStyle} onClick={this.onSave}>Save</Button>
        </div>
      </div>
    )
  }
}

const formStyle = {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const buttonStyle = {
    width: '100%',
    color: '#ffffff'
}

const diagramControlComponentStyle = {
    marginTop: '1em'
}

export default withRouter(DiagramControls);