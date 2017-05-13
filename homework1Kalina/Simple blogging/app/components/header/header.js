import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import All from '../posts/all';
import AddPost from '../../components/posts/add';
import Last from '../posts/last';
import Edit from '../posts/edit';

class Header extends React.Component {
    render() {
        return (
                <div>
                    <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="/"><span className="navbar-brand">Simple Blogging</span></Link>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Add new post</Link></li>
                                <li><Link to="/all">Get all posts</Link></li>
                                <li><Link to="/last">Get last 15 posts</Link></li>
                            </ul>
                        </div>
                    </nav>

                    
                    <Route exact path="/" render={() => <AddPost/>}/>
                    <Route path="/all" component={All}/>
                    <Route path="/last" component={Last}/>
                    <Route path="/edit" component={Edit}/>
                </div>  
        )
    }
}

export default Header;