import React from 'react';

const PersonalInfo = (props) => {
    return (
        <div id="profile-personal-info" className="col-lg-4">
            <ul>
                <li><span className="glyphicon glyphicon-home"></span>Hometown: {props.info.homeTown}</li>
                <li><span className="glyphicon glyphicon-gift"></span>Birthday: {props.info.birthDay}</li>
                <li><span className="glyphicon glyphicon-book"></span>University: {props.info.university}</li>
            </ul>
        </div>
    )
}

export default PersonalInfo