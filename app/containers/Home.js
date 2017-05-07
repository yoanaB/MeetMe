import React from 'react'
import Posts from '../components/posts/posts'
import UserInfo from '../components/UserInfo/user-info'

import {getUserAccount, getAllPosts} from '../requests/user-info-requests'

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            userInfo: {}            
        }
    }

    componentDidMount() {
        getUserAccount().then((data) => {
            this.setState({userInfo: data.data.data.personalInfo})
        })

        getAllPosts().then((data) => {
             this.setState({posts: data.data.data.posts})
        })
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