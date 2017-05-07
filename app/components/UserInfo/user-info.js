import React from 'react';

const UserInfo = (props) => {
    console.log(props)
    return (
        <div id="user-info-home" className="container">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="header-bg" width="250" height="70" id="header-blur"></div>
                        <div className="avatar">
                            <img src={props.info.profilePicture} alt="" />
                        </div>
                        <div className="content">
                            <p>Followers: {props.info.followers}</p>
                            <p>Following: {props.info.following}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo