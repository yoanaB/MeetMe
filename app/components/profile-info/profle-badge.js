import React from 'react';
import { Link } from 'react-router-dom';

const ProfileBadge = (props) => {
    return (
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
                    <button type="button" id="user-personal-posts" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-tasks" aria-hidden="true"></span>
                        <Link to="/profile/posts"><div className="hidden-xs">Posts</div></Link>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" id="user-followers" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <Link to="/profile/followers"><div className="hidden-xs">Followers</div></Link>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" id="user-following" className="btn btn-default" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                        <Link to="/profile/following" ><div className="hidden-xs">Following</div></Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileBadge