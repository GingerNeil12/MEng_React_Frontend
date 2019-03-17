import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateNewDiagram from './CreateNewDiagram';

class DiagramControls extends Component {
  render() {
    return (
      <div>
        <div>
            <Link to="/dashboard">Cancel</Link>
        </div>
        <div>
            <CreateNewDiagram/>
        </div>
        <div>
            <p>More still</p>
        </div>
      </div>
    )
  }
}

export default DiagramControls;
