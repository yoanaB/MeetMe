import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Profile from '../containers/Profile';

class Menu extends React.Component {
    render() {
        return ( 
        <Router>
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/home" className="navbar-brand" href="/home">Meet Me</Link>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/home"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                            <li><Link to="/profile"><span className="glyphicon glyphicon-user"></span> Profile</Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav>
                <hr/>
                <Route exact path="/home" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login}/>
            </div>        
        </Router>
        )
    }
}

export default Menu