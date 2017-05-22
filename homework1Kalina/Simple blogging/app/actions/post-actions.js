import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'


let nextId = 0;
export function addPost(title, author, msg, tags, status, url){
    let post = {
        title, author, msg, tags, status, url
    }

    return {
        type: ADD_POST,
        id: nextId +=1,
        timestamp: Date.now(),
        post
    }
}

export function removePost(id){
    return {
        type: REMOVE_POST,
        id
    }
}

export function editPost(title, author, msg, tags, status, url, id){
    let post = {
        title, author, msg, tags, status, url, id, timestamp: Date.now()
    }
    return {
        type: EDIT_POST,
        post
    }
}

export function changeStatus(status){
    return {
        type: CHANGE_STATUS,
        status
    }
}