import React from 'react'

const Post = (props) => {
    return (
        <div key={props.id} className="container" >
            <div className="row">
                <div className="col-sm-8">
                    <div className="panel panel-white post panel-shadow">
                        <div className="post-heading">
                            <div className="pull-left image">
                                <img src={props.userPicture} className="img-circle avatar" alt="user profile image"/>
                            </div>
                            <div className="pull-left meta">
                                <div className="title h5">
                                    <a href="#"><b>{props.author} </b></a>made a post.
                                </div>
                                <h6 className="text-muted time">{props.timestamp.toLocaleTimeString()}</h6>
                            </div>
                        </div> 
                        <div className="post-description"> 
                            <p>{props.msg}</p>
                            <div className="stats">
                                <a href="#" className="btn btn-default stat-item">
                                    <i className="glyphicon glyphicon-hand-right"></i> {props.likes}
                                </a>
                                <a href="#" className="btn btn-default stat-item">
                                    <i className="glyphicon glyphicon-tasks"></i> 12
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post