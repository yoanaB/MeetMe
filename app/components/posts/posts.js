import React from "react"
import Post from './post'

class Posts extends React.Component {
    

    render() {
        return <div className="posts col-sm-9">
                {this.props.posts.map(post =>
                     <Post key={post.id} author={post.author} userPicture={post.userPicture} msg={post.msg} timestamp={post.timestamp} likes={post.likes} comments={post.comments}/>
                )};
            </div>
    }
}

export default Posts