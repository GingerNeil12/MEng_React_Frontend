import React, { Component } from 'react'
import PropTypes from 'prop-types';

class DiagramItem extends Component {
  render() {
      const { name } = this.props.diagram;
    return (
      <tr>
          <td>{name}</td>
          <td>LINKS TO DO THINGS GO HERE</td>
      </tr>
    )
  }
}

DiagramItem.propTypes = {
    diagram: PropTypes.object.isRequired
}

export default DiagramItem
