import { combineReducers } from 'redux';
import posts from './rootReducer';

export default combineReducers({
    data: posts
});