import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDiagrams } from '../../actions/diagramActions';
import PropTypes from 'prop-types';
import Diagrams from './Diagrams';


class Dashboard extends Component {
    componentDidMount() {
        this.props.getDiagrams();
    }


  render() {
    return (
      <div>
        <h2 style={titleStyle}>My Diagrams</h2>
        <p style={titleStyle}>NEW DIAGRAM</p>
        <Diagrams diagrams={this.props.diagrams}/>
      </div>
    )
  }
}

const titleStyle = {
  textAlign: "center",
  marginTop: "1em"
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
