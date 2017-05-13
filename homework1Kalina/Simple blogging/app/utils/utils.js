import {ACTIVE, INACTIVE, ALL} from '../config/constants'

export default (posts, active) => {
    switch (active) {
        case ACTIVE:
            return posts.filter((post) => (post.status));
        case INACTIVE:
             return posts.filter((post) => !(post.status));
        case ALL:
            return posts
    }
}