import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class DiagramItem extends Component {
    render() {
        const { name } = this.props.diagram;
        const editLink = {
            pathname: '/editDiagram/' + this.props.diagram._id
        }
        return (
            <div style={formStyle}>
                <div style={itemStyle}>
                    <div style={itemTitle}>
                        <p>{name}</p>
                    </div>
                    <div style={itemOptions}>
                        <p>View | <Link to={editLink} style={linkStyle}>Edit</Link></p>
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

const linkStyle = {
    color: '#0645AD',
    textDecoration: 'underline'
}

DiagramItem.propTypes = {
    diagram: PropTypes.object.isRequired
}

export default DiagramItem;