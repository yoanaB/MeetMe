import React from 'react';
import NotificationSystem from 'react-notification-system';
import {connect} from 'react-redux';
import {dispatch} from 'redux';
import {editPost} from '../../actions/post-actions';
import {removePost} from '../../actions/post-actions';

class Edit extends React.Component {
    
    editPost(e) {
        this.props.dispatch(editPost( this.refs.title.value, this.refs.author.value, this.refs.msg.value, this.refs.tags.value, this.refs.active.checked, this.refs.url.value, +e.target.getAttribute("data-id") ));
    }

    addNotification() {
        this.refs.notificationSystem.addNotification({
            message: 'Post changed successfully',
            level: 'info'
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

    onClick(e) {
        if(!this.checkInputs()) {
            return;
        }
        this.editPost(e);
        this.addNotification();
    } 

    render() {
        let postID = +this.props.location.search[1];
        let postArr = this.props.posts.filter((post) => {return post.id === postID});
        if(!postArr.length) {
            return <div id="app-page" className="no-posts">No post!</div>
        }
        let post = postArr[0];
        return (
            <div id="app-page" className="add-new-post-container">
                <NotificationSystem ref="notificationSystem" />
                <div className="panel panel-info col-lg-7 text-center">
                    <div className="panel-body">
                        <div id="author-post" className="clearfix">
                                <span>Author: </span>
                                <input type="text" ref="author" id="author-post-value" defaultValue={post.author}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="title-post">
                                <span>Title: </span>
                                <input type="text" ref="title" id="title-post-value" defaultValue={post.title}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div id="status-post">
                                <span id="status">Status: </span>
                                <input type="radio" ref="active" name="status-input" defaultChecked={post.status}/><span> Active </span>
                                <input type="radio" ref="inactive" name="status-input" defaultChecked={!post.status}/><span> Inactive </span>
                        </div>
                        <textarea defaultValue={post.msg} ref="msg" className="add-new-post-textarea"></textarea>
                        <div id="tags-post">
                            <span>Tags: </span>
                            <input type="text" ref="tags" id="tags-post-value" defaultValue={post.tags}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>    
                        <div className="btn-group btn-icons">
                            <span id="btn btn-post-picture" className="glyphicon glyphicon-picture"></span>
                            <input type="text" ref="url" id="picture-url" defaultValue={post.url}/>
                        </div>
                        <button className="btn btn-default pull-right btn-add-new-post" type="button" data-id={post.id} onClick={(e) => this.onClick(e)} >Save</button>                
                    </div>
                </div>
            </div>
        )
        }
    }

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        status: state.status
    }
}

let EditPost = connect(
  mapStateToProps,
  null
)(Edit)

export default EditPost