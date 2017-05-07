import React from 'react'
import Posts from '../components/posts/posts'
import UserInfo from '../components/UserInfo/user-info'

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
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
            }],
            userInfo: {
                    name: "Kalina Georgieva",
                    followers: 235,
                    following: 56,
                    profilePicture:"http://bootdey.com/img/Content/user_1.jpg"
                }
            
        }
    }

    render() {
        return ( 
            <div id="app-page"> 
                <UserInfo info={this.state.userInfo}/>
                <Posts posts={this.state.posts}/>
            </div>
            
        )
    }
}

export default Home;