import {ADD_POST, REMOVE_POST, EDIT_POST, CHANGE_STATUS} from '../config/constants'
import { combineReducers } from "redux"
import merge from 'lodash/merge'


const initialState = {
  posts: [
    //   { id: 0,
    //     title: "Initial Post",
    //     author: "Kalina",
    //     msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "#love #sun #happy",
    //     status: true,
    //     url: "http://cdn.images.express.co.uk/img/dynamic/1/590x/dog-650299.jpg",
    //     timestamp: Date.now()
    // }, { id: 1,
    //     title: "1",
    //     author: "Kalina",
    //     msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "#love #sun #happy",
    //     status: false,
    //     url: "https://www.pets4homes.co.uk/images/breeds/55/large/2525bdb43f08d9b6861b1d089f96fef2.jpg",
    //     timestamp: Date.now()
    // },
    // { id: 2,
    //     title: "2",
    //     author: "Kalina",
    //     msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "#love #sun #happy",
    //     status: false,
    //     url: "https://www.pets4homes.co.uk/images/breeds/55/large/2525bdb43f08d9b6861b1d089f96fef2.jpg",
    //     timestamp: Date.now()
    // },
    // { id: 3,
    //     title: "3",
    //     author: "Kalina",
    //     msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "#love #sun #happy",
    //     status: false,
    //     url: "https://www.pets4homes.co.uk/images/breeds/55/large/2525bdb43f08d9b6861b1d089f96fef2.jpg",
    //     timestamp: Date.now()
    // },
    // { id: 4,
    //     title: "4",
    //     author: "Kalina",
    //     msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     tags: "#love #sun #happy",
    //     status: false,
    //     url: "https://www.pets4homes.co.uk/images/breeds/55/large/2525bdb43f08d9b6861b1d089f96fef2.jpg",
    //     timestamp: Date.now()
    // }
  ],
  status: "ALL"
}

const post = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                id: action.id,
                author: action.post.author,
                title: action.post.title,
                msg: action.post.msg,
                tags: action.post.tags,
                timestamp: action.timestamp,
                status: action.post.status,
                url: action.post.url
            };
        default:
            return state;
    }
};

function postReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {posts: [
                ...state.posts,
                post(state, action)
            ], status: state.status};
        case REMOVE_POST:
            return {posts: state.posts.filter(post => post.id !== action.id), status: state.status};
        case CHANGE_STATUS:
            return {status: action.status, posts: state.posts};
        case EDIT_POST:
            let newPosts = state.posts.map((post)=> {
                if(action.post.id !== post.id) {
                    return post
                }
                return action.post;
            })

            return {
                posts: newPosts,
                status: state.status
            }
        default:
            return state;
  }
}


export default postReducer