import React from 'react';
import ShowPost from '../posts/show-post';
import {connect} from 'react-redux';
import {dispatch} from 'redux';
import {changeStatus} from '../../actions/post-actions';
import statusFilter from '../../utils/utils';

class LastPosts extends React.Component {
    onClickStatus(e){
        this.props.dispatch(changeStatus(e.target.getAttribute("data-id")));
    } 

    render() {
        let {status} = this.props;
        let filterStatusPosts = statusFilter(this.props.posts, status);        
        let filterSortedPosts = filterStatusPosts && filterStatusPosts.slice(0, 15).sort(function(t1, t2){
            if(t1.timestamp > t2.timestamp) {
                return -1;
            } else if (t1.timestamp < t2.timestamp) {
                return 1;
            }
             return 0;
        })
    return (
        <div id="app-page" >
             <div id="show-status"> Show only: 
                <span className="btn btn-primary btn-all" data-id="ALL" onClick={(e)=> this.onClickStatus(e)}>All </span>
                <span className="btn btn-primary btn-active" data-id="ACTIVE" onClick={(e)=> this.onClickStatus(e)}>Active </span> 
                <span className=" btn btn-primary btn-inactive" data-id="INACTIVE" onClick={(e)=> this.onClickStatus(e)}>Inactive</span> 
                <hr/>
            </div> 
            {filterSortedPosts && filterSortedPosts.length ? 
                filterSortedPosts.map((post) => <ShowPost key={post.id} {...post} edit-remove={false}/>)
            : <div className="no-posts">No posts yet!</div>}
        </div>        
    )}
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts,
        status: state.status
    }
}

let Last = connect(
  mapStateToProps, null
)(LastPosts)

export default Last