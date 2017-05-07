import React from 'react';

const AddPost = () => {
    return (
        <div className="add-new-post-container">
            <div className="panel panel-info col-lg-7">
                <div className="panel-body">
                    <textarea placeholder="Write your post here!" className="add-new-post-textarea"></textarea>
                    <form className="form-inline">
                        <div className="btn-group">
                            <button className="btn btn-md" id="btn-post-text" type="button"><span className="glyphicon glyphicon-text-background"></span></button>
                            <button className="btn btn-md" id="btn-post-picture" type="button"><span className="glyphicon glyphicon-picture"></span></button>
                        </div>
                        <button className="btn btn-primary pull-right btn-add-new-post" type="button">Share</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddPost