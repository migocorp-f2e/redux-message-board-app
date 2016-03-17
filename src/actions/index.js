import * as types from '../constants/ActionTypes';

let getListSuccessed = (json) => {
    return {
        type : types.GET_LIST_SUCCESSED,
        lists: json
    };
};

let delListSuccessed = () => {
    return {
        type : types.DEL_LIST_SUCCESSED
    };
};

let setListSuccessed = () => {
    return {
        type : types.SET_LIST_SUCCESSED
    };
};

let fetchFailed = (err) => {
    return {
        type: types.GET_LIST_FAILED,
        code: err
    };
};

/* List: 加入留言列表 */
export const addList = (message, user) => {
    return {
        type: types.ADD_LIST,
        message,
        user
    };
};

/* List: 刪除留言 */
export const delList = (id) => {
    return {
        type: types.DEL_LIST,
        id
    };
};

/* List: 編輯留言 */
export const editList = (id, message) => {
    return {
        type: types.EDIT_LIST,
        id,
        message
    };
};

/* Modal: 更改 user 名稱 */
export const updateUser = (user) => {
    return {
		type : types.UPDATE_USER,
		user,
    };
};

/* Modal: 更改 message */
export const updateMsg = (message) => {
    return {
        type   : types.UPDATE_MESSAGE,
        message,
    };
};

/* Modal: 顯示隱藏 modal */
export const toggleModal = (visible) => {
    return {
        type   : types.TOGGLE_MODAL,
        visible
    };
};

/* Firebase */
export const setListToFirebase = (value) => {
    return {
        types   : [setListSuccessed, fetchFailed],
        fetchAPI: {
            child : 'lists',
            method: 'set',
            value
        }
    };
};

export const getListFromFirebase = () => {
    return {
        types   : [getListSuccessed, fetchFailed],
        fetchAPI: {
            child : 'lists',
            method: 'get'
        }
    };
};

export const delListOnFirebase = (val) => {
    return {
        types   : [delListSuccessed, fetchFailed],
        fetchAPI: {
            child : 'lists',
            method: 'del',
            val
        }
    };
};

