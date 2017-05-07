import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProfileBadge from '../components/profile-info/profile-badge'
import PersonalInfo from '../components/profile-info/profile-personal-info'
import Posts from '../components/profile-info/profile-posts'
import Followers from '../components/profile-info/profile-followers'
import Following from '../components/profile-info/profile-following'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            personalInfo: {
                name: "Kalina Georgieva",
                picture: "http://bootdey.com/img/Content/user_1.jpg",
                homeTown: "Montana",
                university: "Sofia University",
                birthDay: "29.04"
            },           
            followers: [],
            following: [],
            posts: [{
                id: 1,
                author: "Kalina Georgieva",                
                userPicture: "http://bootdey.com/img/Content/user_1.jpg", 
                msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                timestamp: new Date(),
                likes: 23,
                comments: []
            }, {
                id: 2,
                author: "Kalina Georgieva",                
                userPicture: "http://bootdey.com/img/Content/user_1.jpg", 
                msg:"Dolorem sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                timestamp: new Date(),
                likes: 23,
                comments: []
            }]
        }
    }

    render(){
        return (
            <div id="profile-page">
                <Router>
                    <div className="container">
                        <ProfileBadge name={this.state.personalInfo.name} picture={this.state.personalInfo.picture} followers={this.state.followers} following={this.state.following}/>
                        <PersonalInfo info={this.state.personalInfo}/>
                        
                        <Route exact path="/profile/posts/" component={Posts}/>
                        <Route path="/profile/followers/" component={Followers}/>
                        <Route path="/profile/following/" component={Following}/>
                    </div>
                </Router>
            </div>            
        )
    }
}

export default Profile;