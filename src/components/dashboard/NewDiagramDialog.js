import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

class NewDiagramDialog extends Component {
    render() {
        return (
            <div style={popup}>
                <div style={popupInner}>
                    <div style={formStyle}>
                        <h2>New Data</h2>
                        <Form
                            id="newDataForm"
                            noValidate
                        >
                            <Form.Group id="newData">
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    name="data"
                                    placeholder="New Data"
                                    style={textBoxStyle}
                                />
                            </Form.Group>
                            <Form.Group id="submit">
                                <Button variant="primary" href='diagramHome' style={buttonStyle}>Submit</Button>
                                <Button variant="danger" onClick={this.props.closePopup} style={buttonStyle}>Cancel</Button>
                            </Form.Group>
                        </Form>
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
    left: '31%',
    right: '31%',
    top: '31%',
    bottom: '31%',
    margin: 'auto',
    background: 'white'
}

const formStyle = {
    textAlign: 'center',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em'
}

const textBoxStyle = {
    marginTop: '1em'
}

const buttonStyle = {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em'
}

export default NewDiagramDialog;