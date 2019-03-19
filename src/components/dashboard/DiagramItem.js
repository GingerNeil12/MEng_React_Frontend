import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

class DiagramItem extends Component {
    render() {
        const { name } = this.props.diagram;
        return (
            <div style={formStyle}>
                <div style={itemStyle}>
                    <div style={itemTitle}>
                        <p>{name}</p>
                    </div>
                    <div style={itemOptions}>
                        <p>View | <Button variant="primary" size="sm">Edit</Button></p>
                    </div>
                </div>
            </div>
        )
    }
}

const formStyle = {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2em'
}

const itemStyle = {
    borderBottom: '1px dotted'
}

const itemTitle = {
    display: 'inline-block'
}

const itemOptions = {
    display: 'inline-block',
    float: 'right'
}

DiagramItem.propTypes = {
    diagram: PropTypes.object.isRequired
}

export default DiagramItem;