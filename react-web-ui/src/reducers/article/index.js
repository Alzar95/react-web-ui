import * as reducerType from '../../unit/constants';

let initState = [];

const article = (state = initState, action) => {
    switch (action.type) {
        case reducerType.ARTICLE:
            return action.data;
        default:
            return state;
    }
};

export default article;