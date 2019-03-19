import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDiagram } from '../../actions/diagramActions'
import Canvas from './Canvas'
import EditControls from './EditControls'

class EditDiagram extends Component {
    componentDidMount() {
        let diagramId = this.props.match.params.diagramId;
        this.props.getDiagram(diagramId);
        console.log(this.props.diagram);
    }
    render() {
        return (
            <div style={formStyle}>
                
            </div>
        )
    }
}

const formStyle = {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    display: 'flex',
    textAlign: 'center'
}

const sectionOne = {
    flex: '1'
}

const sectionTwo = {
    flex: '3'
}

const sectionThree = {
    flex: '1'
}

const mapStateToProps = state =>  ({
    diagram: state.posts
});

export default connect(mapStateToProps, { getDiagram })(EditDiagram);
