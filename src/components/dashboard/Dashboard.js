import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDiagrams } from '../../actions/diagramActions';
import PropTypes from 'prop-types';
import Diagrams from './Diagrams';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Dashboard extends Component {
    componentDidMount() {
        this.props.getDiagrams();
    }


  render() {
    return (
      <div>
        <div style={formHeaderStyle}>
          <h2>My Diagrams</h2>
          <Button variant="primary" style={newDiagramButtonStyle}>New Diagram</Button>
        </div>
        <Diagrams diagrams={this.props.diagrams}/>
      </div>
    )
  }
}

const formHeaderStyle = {
  textAlign: "center",
  marginTop: "2em"
}

const newDiagramButtonStyle = {
  marginTop: '1em'
}

Dashboard.propTypes = {
  getDiagrams: PropTypes.func.isRequired,
  diagrams: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    diagrams: state.posts,
    auth: state.auth
});

export default connect(mapStateToProps, {getDiagrams})(Dashboard);
