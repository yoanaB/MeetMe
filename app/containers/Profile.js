import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProfileBadge from '../components/profile-info/profle-badge'
import Posts from '../components/profile-info/profile-posts'
import Followers from '../components/profile-info/profile-followers'
import Following from '../components/profile-info/profile-following'

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Kalina Georgieva",
            picture: "http://bootdey.com/img/Content/user_1.jpg",
            followers: [],
            following: []
        }
    }

    render(){
        return (
            <div id="profile-page">
                <Router>
                    <div>
                        <ProfileBadge name={this.state.name} picture={this.state.picture} followers={this.state.followers} following={this.state.following}/>
                        <Route exact path="/profile/posts" component={Posts}/>
                        <Route path="/profile/followers" component={Followers}/>
                        <Route path="/profile/following" component={Following}/>
                    </div>
                </Router>
            </div>            
        )
    }
}

export default Profile;