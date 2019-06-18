import uuid from 'uuid';

export const NEW_USER = 'NEW_USER';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';


function addComment(text) {
    return {
        type: ADD_COMMENT,        
        id: uuid.v4(),
        text: text
    }
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

export function thumbdownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

export function addUser(name) {
    return {
        type: NEW_USER,
        name,
        id: uuid.v4()
    }
}

export default addComment;