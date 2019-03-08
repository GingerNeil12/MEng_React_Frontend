import React, { Component } from 'react'
import DiagramItem from './DiagramItem';
import PropTypes from 'prop-types';

class Diagrams extends Component {
  render() {
    return this.props.diagrams.diagrams.map((diagram) => (
      <DiagramItem key={diagram._id} diagram={diagram}/>
    ))
  }
}

Diagrams.propTypes = {
  diagrams: PropTypes.object.isRequired
}

export default  Diagrams;
