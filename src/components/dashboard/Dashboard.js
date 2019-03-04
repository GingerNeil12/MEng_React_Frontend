import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDiagrams } from '../../actions/diagramActions';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';


class Dashboard extends Component {
    componentDidMount() {
        this.props.getDiagrams();
    }


  render() {
    return (
      <div>
        <h2 style={titleStyle}>My Diagrams</h2>
        <Table 
          striped 
          bordered 
          hover 
          variant="primary" 
          style={tableStyle}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
        </Table>
      </div>
    )
  }
}

const tableStyle = {
  width: "80%",
  margin: "auto",
  marginTop: "2em"
}
const titleStyle = {
  textAlign: "center",
  marginTop: "1em"
}

Dashboard.propTypes = {
  getDiagrams: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    diagrams: state.diagrams,
    auth: state.auth
});

export default connect(mapStateToProps, {getDiagrams})(Dashboard);
