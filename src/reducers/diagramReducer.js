import {
    GET_DIAGRAMS,
    GET_DIAGRAM,
    ADD_DIAGRAM,
    NEW_DIAGRAM,
    DIAGRAM_LOADING
} from '../actions/types';

const initialState = {
    diagrams: [],
    diagram: {},
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DIAGRAM_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_DIAGRAMS:
            return {
                ...state,
                diagrams: action.payload,
                loading: false
            };
        case GET_DIAGRAM:
            return {
                ...state,
                diagram: action.payload,
                loading: false
            };
        case ADD_DIAGRAM:
            return {
                ...state,
                diagrams: [action.payload, ...state.diagrams]
            };
        case NEW_DIAGRAM:
            return {
                ...state,
                diagram: action.payload,
                loading: false
            };
        default:
            return state;
    }
}