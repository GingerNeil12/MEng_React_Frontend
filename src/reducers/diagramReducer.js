import { SET_CURRENT_DIAGRAMS } from '../actions/types';

const initialState = {
    diagrams: {}
}

export default function(state = initialState, action){
    switch(action.payload){
        case SET_CURRENT_DIAGRAMS:
            return {
                ...state,
                diagrams: action.diagrams
            }
        default:
            return state;
    }
}