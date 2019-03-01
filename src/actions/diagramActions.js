import {
    GET_DIAGRAMS,
    GET_DIAGRAM,
    ADD_DIAGRAM,
    NEW_DIAGRAM,
    DIAGRAM_LOADING
} from './types';

import axios from 'axios';

export const addDiagram = diagramData => dispatch => {
    axios
        .post('http://localhost:5000/api/diagram/user', diagramData)
        .then(result => {
            dispatch({
                type: ADD_DIAGRAM,
                payload: result.data
            })
        })
};

export const getDiagrams = () => dispatch => {
    dispatch(setDiagramLoading())

    axios
        .get('http://localhost:5000/api/diagram/user')
        .then(result => {
            dispatch({
                type: GET_DIAGRAMS,
                payload: result.data
            })
        })
}

export const getDiagram = id => dispatch => {
    dispatch(setDiagramLoading())

    axios
        .get('http://localhost:5000/api/diagram/id/${id}')
        .then(result => {
            dispatch({
                type: GET_DIAGRAM,
                payload: result.data
            })
        })
}

export const newDiagram = diagramData => dispatch => {
    dispatch(setDiagramLoading())

    axios
        .post('', diagramData)
        .then(result => {
            dispatch({
                type: NEW_DIAGRAM,
                payload: result.data
            })
        })
}

export const setDiagramLoading =() => {
    return {
        type: DIAGRAM_LOADING
    };
};