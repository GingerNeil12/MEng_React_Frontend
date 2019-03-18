import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class NewDiagramDialog extends Component {
  render() {
    return (
      <div style={popup}>
        <div style={popupInner}>
            <div style={formStyle}>
                <p>BLAH</p>
                <Button variant="primary" onClick={this.props.closePopup}>Press Me</Button>
            </div>
        </div>
      </div>
    )
  }
}

const popup = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
  const popupInner = {
    position: 'absolute',
    left: '25%',
    right:'25%',
    top: '25%',
    bottom: '25%',
    margin: 'auto',
    background: 'white'
  }

  const formStyle = {
      textAlign: 'center'
  }

export default NewDiagramDialog;