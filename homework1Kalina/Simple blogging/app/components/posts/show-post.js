import React from 'react';
import {Route, Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


const ShowPost = (props) => {
    let tags = props.tags.split("#").filter(function(item){return item});
    let date = new Date(props.timestamp);
    
    return (
        <div> 
            <div className="row all-posts">
                 <div className="well">      
                    <div className="media">
                        {(props.url) ?
                            <span className="pull-left" href="#">
                                <img className="media-object" src={props.url}/>
                            </span> 
                            : ""}
                        <div className="media-body">
                            <div className="row">
                                    <div className="col-lg-9 title">
                                            <h4><strong>{props.title}</strong></h4>
                                            {props["edit-remove"] ? 
                                                <span>
                                                    <Link to={{ pathname: '/edit', search: `?${props.id}`}} ><span className="glyphicon glyphicon-edit btn-edit-post btn" data-id={props.id}></span></Link>
                                                    <span className="glyphicon glyphicon-trash btn-remove-post btn" data-id={props.id} onClick={(e)=> props.onClickRemove(e)}></span>
                                                </span>
                                                : ""
                                            }
                                        </div>
                            </div>
                            <div className="post-text">  
                                <ReactMarkdown source={props.msg} />
                            </div>
                        </div>
                        <div className="row span-group">
                        <div className="span8">
                            <p></p>
                            <p>
                            <span> <i className="glyphicon glyphicon-user"></i> by {props.author} </span>
                            <span>| <i className="glyphicon glyphicon-calendar"></i> {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}h {date.toLocaleDateString()}</span>
                            <span>| <i className="glyphicon glyphicon-check"></i> Status: {(props.status) ? "active": "inactive"} </span>                        
                            {tags.length ? 
                            <span>
                                <span>| <i className="glyphicon glyphicon-tags"></i> Tags : </span>
                                {tags.map(function(tag, index){
                                    return <span key={index} className="label label-info">{tag}</span> 
                                })}
                            </span>
                            : ""}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            <hr/>
            </div>
        </div>
)}

export default ShowPost;