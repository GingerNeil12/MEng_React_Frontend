import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDiagrams } from '../../actions/diagramActions';
import PropTypes from 'prop-types';
import Diagrams from './Diagrams';
import { Button } from 'react-bootstrap';
import NewDiagramDialog from './NewDiagramDialog';


class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup () {
    this.setState({showPopup: !this.state.showPopup});
  }

  componentDidMount() {
    this.props.getDiagrams();
  }


  render() {
    return (
      <div>
        <div style={formHeaderStyle}>
          <h2>My Diagrams</h2>
          <Button variant="primary" onClick={this.togglePopup.bind(this)} style={newDiagramButtonStyle}>New Diagram</Button>
        </div>
        <Diagrams diagrams={this.props.diagrams} />

        {this.state.showPopup ? 
        <NewDiagramDialog closePopup={this.togglePopup.bind(this)}/>
        : null  
      }
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

export default connect(mapStateToProps, { getDiagrams })(Dashboard);
