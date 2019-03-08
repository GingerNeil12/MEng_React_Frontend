import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import diagramReducer from './diagramReducer';



export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    posts: diagramReducer
});
