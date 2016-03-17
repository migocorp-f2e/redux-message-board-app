import * as types from '../constants/ActionTypes';

let listId = 1;

const lists = (state = {}, action) => {
    switch (action.type) {
        case types.GET_LIST_SUCCESSED:
            return action.lists;        
        case types.DEL_LIST:
            const newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    };
};

export default lists;
