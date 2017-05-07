import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBadge = (props) => {
    return (
        <div id="profile-badge" className="row">
            <div className="col-lg-12 col-sm-12">
                <div className="card hovercard">
                    <div className="card-background">
                        <img className="card-bkimg" alt="" src={props.picture}/>
                    </div>
                    <div className="useravatar">
                        <img alt="" src={props.picture}/>
                    </div>
                    <div className="card-info"> <span className="card-title">{props.name}</span></div>
                </div>
                <div className="btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                    <div className="btn-group" role="group">
                        <Link to="/profile/posts/">
                            <button type="button" id="user-personal-posts" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                                <div className="hidden-xs">Posts</div>
                            </button>
                        </Link>
                    </div>                    
                    <div className="btn-group" role="group">
                        <Link to="/profile/followers/">
                            <button type="button" id="user-followers" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                <div className="hidden-xs">Followers</div>
                            </button>
                        </Link>
                    </div>
                    <div className="btn-group" role="group">
                        <Link to="/profile/following/" >
                            <button type="button" id="user-following" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                <div className="hidden-xs">Following</div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default ProfileBadge