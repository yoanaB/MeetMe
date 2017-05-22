import React from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';
import {addPost} from '../../actions/post-actions';
import {dispatch} from 'redux';



class Add extends React.Component {
    nullValues() {
        this.refs.author.value = "";
        this.refs.title.value = "";
        this.refs.msg.value = "";
        this.refs.tags.value = "";
        this.refs.url.value = "";
    }
    addPost() {
        this.props.dispatch(addPost( this.refs.title.value, this.refs.author.value, this.refs.msg.value, this.refs.tags.value, this.refs.active.checked, this.refs.url.value ));
    }

    addNotification() {
        this.refs.notificationSystem.addNotification({
            message: 'Post added successfully',
            level: 'success'
        });
    }  

    checkInputs(){
        if(!this.refs.title.value || !this.refs.author.value || !this.refs.msg.value ||  !this.refs.tags.value) {
            this.refs.notificationSystem.addNotification({
                message: 'To add post, please enter all required values: title, author, message and tags!',
                level: 'warning'
            });
            return false;
        }
        
        return true;
    }

    onClick() {
        if(!this.checkInputs()) {
            return;
        }
        this.addPost();
        this.nullValues();
        this.addNotification();
    } 

    render() {
        return (
            <div id="app-page" className="add-new-post-container">
                <NotificationSystem ref="notificationSystem" />
                <div className="panel panel-info col-lg-7 text-center">
                    <div className="panel-body">
                        <div id="author-post" className="clearfix">
                                <span>Author: </span>
                                <input type="text" ref="author" id="author-post-value" placeholder="Author"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="title-post">
                                <span>Title: </span>
                                <input type="text" ref="title" id="title-post-value" placeholder="Post title"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="status-post">
                                <span id="status">Status: </span>
                                <input type="radio" ref="active" name="status-input" defaultChecked={true}/><span> Active </span>
                                <input type="radio" ref="inactive" name="status-input"/><span> Inactive </span>
                        </div>
                        <textarea placeholder="Write your post here!" ref="msg" className="add-new-post-textarea"></textarea>
                        <div id="tags-post">
                            <span>Tags: </span>
                            <input type="text" ref="tags" id="tags-post-value" placeholder="Tags"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>    
                        <div className="btn-group btn-icons">
                            <span id="btn btn-post-picture" className="glyphicon glyphicon-picture"></span>
                            <input type="text" ref="url" id="picture-url" placeholder="url"/>
                        </div>
                        <button className="btn btn-primary pull-right btn-add-new-post" type="button" onClick={() => this.onClick()} >Post</button>                
                    </div>
                </div>
            </div>
        )
        }
    }


let AddPost = connect(
  null,
  null
)(Add)

export default AddPost