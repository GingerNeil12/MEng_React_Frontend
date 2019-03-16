import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DiagramItem extends Component {
    render() {
        const { name } = this.props.diagram;
        return (
            <div style={formStyle}>
                <div style={itemStyle}>
                    <p>{name}</p>
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

DiagramItem.propTypes = {
    diagram: PropTypes.object.isRequired
}

export default DiagramItem;