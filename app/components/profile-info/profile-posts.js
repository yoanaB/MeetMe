import React from 'react'
import AddPost from '../posts/add-post'
import Posts from '../posts/posts'

class ProfilePosts extends React.Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    render(){
        return (
            <div>
                <AddPost/>
            </div>
        )
    }
}

export default ProfilePosts;