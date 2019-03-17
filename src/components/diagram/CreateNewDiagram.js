import React, { Component } from 'react'

class CreateNewDiagram extends Component {
  render() {
    return (
      <div style={form}>
        <div style={formGroup}>
            <div style={formItem}>
                <input type="text" placeholder="New Data" style={formTextBox}/>
            </div>
            <div style={formItem}>
                <input type="submit" value="Draw" style={formButton}/>
            </div>
        </div>
      </div>
    )
  }
}

const form = {
    width: '90%',
    margin: 'auto',
    overflow: 'hidden'
}

const formGroup = {
    margin: '1em'
}

const formItem = {
    display: 'block',
    margin: '9px'
}

const formTextBox = {
    width: '100%',
    height: '25px'
}

const formButton = {
    width: '100%',
    borderStyle: 'none',
    fontSize: '16px',
    padding: '3px',
    background: '#007bff',
    color: '#ffffff'
}

export default CreateNewDiagram;
