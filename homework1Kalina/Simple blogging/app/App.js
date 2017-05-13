import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/header';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import postReducer from './reducers/post-reducers'

const App = () => {
    return (
        <Provider store={createStore(postReducer)}>
            <Router>
                <Header/>
            </Router>
        </Provider>
       
    )
}

ReactDOM.render(<App/>, document.getElementById("app"))