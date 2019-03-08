import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Diagrams extends Component {
  render() {
    return (
      <div>
        {console.log(this.props.diagrams)}
      </div>
    )
  }
}

Diagrams.propTypes = {
  diagrams: PropTypes.object.isRequired
}

export default  Diagrams;
