import { combineReducers } from 'redux-immutable';
import article from './article';

const rootReducer = combineReducers({
    article
});

export default rootReducer;