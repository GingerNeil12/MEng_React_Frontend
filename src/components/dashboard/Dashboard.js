import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDiagrams } from '../../actions/diagramActions';
import PropTypes from 'prop-types';
import Diagrams from './Diagrams';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
    componentDidMount() {
        this.props.getDiagrams();
    }


  render() {
    return (
      <div>
        <h2 style={titleStyle}>My Diagrams</h2>
        <Link to="/newDiagram"><p style={newDiagramLinkStyle}>NEW DIAGRAM</p></Link>
        <Diagrams diagrams={this.props.diagrams}/>
      </div>
    )
  }
}

const titleStyle = {
  textAlign: "center",
  marginTop: "1em"
}

const newDiagramLinkStyle = {
  textAlign: "center",
  marginTop: "1em",
  textDecoration: 'underline'
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
