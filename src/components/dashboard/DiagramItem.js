import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DiagramItem extends Component {
    render() {
        const { name } = this.props.diagram;
        return (
            <div style={formStyle}>
                <p>{name}</p>
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

DiagramItem.propTypes = {
    diagram: PropTypes.object.isRequired
}

export default DiagramItem;