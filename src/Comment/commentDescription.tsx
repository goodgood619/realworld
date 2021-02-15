import React, { useState, useEffect, Fragment } from 'react';
import './css/commentDescription.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


function CommentDescription(props: { description: string, tagList: Array<any>, slug: string }) {
    const userName = localStorage.getItem('username');
    const [userComment, setUserComment] = useState<string>("");
    const [commentArray, setCommentArray] = useState<Array<any>>([]);

    // getComments from backend
    useEffect(() => {
        axios
            .get(`https://conduit.productionready.io/api/articles/${props.slug}/comments`)
            .then((res: any) => {
                let commentArray: Array<any> = res.data.comments;
                commentArray.forEach(item=> {
                    item.unique = Math.random().toString(36).substr(2, 16)
                });
                setCommentArray(commentArray)
            })
            .catch((err: any) => {
                console.log(err);
            })
    }, [props.slug]);


    const handleComment = (e: any) => {
        e.preventDefault();
        console.log('comment data : ', userComment);
        const data = {
            "comment" : {
                "body": userComment
            }  
        };

        axios
            .post(`https://conduit.productionready.io/api/articles/${props.slug}/comments`, data, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                let arr: Array<any> = [...commentArray];
                res.data.comment.unique = Math.random().toString(36).substr(2, 16)
                arr.unshift(res.data.comment);
                setCommentArray(arr);
            })
            .catch((err: any) => {
                console.log(err);
            })
    };

    const handleDeleteComment = (e: any, id: number) => {
        e.preventDefault();
        console.log('delete id : ', id);
        axios
            .delete(`https://conduit.productionready.io/api/articles/${props.slug}/comments/${id}`, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                 setCommentArray([...commentArray].filter((item: any) => {
                    return item.id !== id
                }));
            })
            .catch((err: any) => {
                console.log(err);
            })
    }
    const noComment = () => {
        let arr: Array<any> = [];
        arr.push(
            <div className="comment_sign">
                <Link to="/signin" className="comment_sign">
                    Sign in
                </Link>
                &nbsp;or&nbsp;
                <Link to="/signup" className="comment_sign">
                    sign up
                </Link>&nbsp;to add comments on this article.
            </div>
        );
        return arr;
    };

    const okComment = () => {
        let arr: Array<any> = [];
        arr.push(
            <div className="comment_list">

                {/* 나의 코멘트 */}
                <form onSubmit = {handleComment}>
                    <textarea className="comment_textarea" placeholder="Write a comment..." onChange = {e=> setUserComment(e.target.value)}>
                    </textarea>
                    <div className="comment_footer_user">
                        <img src="./image/github.PNG" width="32px" height="32px" alt="" />
                        <button className="comment_post" type = "submit">Post Comment</button>
                    </div>
                </form>

                {
                    commentArray.map((item: any) => (
                        <Fragment key = {item.unique}>
                            <textarea className="comment_textarea" value = {item.body} readOnly>
                            </textarea>
                            <div className="comment_footer">
                                <img src={item.author.image} width="32px" height="32px" alt="" />
                                <Link to={`/profile/${item.author.username}`}>
                                    <span className="comment_other">{item.author.username}</span>
                                </Link>
                                <span className="comment_other_created">{item.createdAt}</span>
                                {
                                    userName === item.author.username ? <button className="comment_trash" onClick={(e) => handleDeleteComment(e, item.id)}>
                                        <img src="./image/trash.PNG" alt="" width="15px" height="15px" />
                                    </button> : ""
                                }
                            </div>
                        </Fragment>
                    ))
                }
            </div>);
        return arr;
    };
    return (
        <div className="comment">
            <div className="comment_description">
                {props.description}
                <ul className="comment_tag">
                    {
                        props.tagList.map((item: any) => (
                            <Fragment key = {item.unique}>
                                <li className="comment_tag_item">{item}</li>
                            </Fragment>
                        ))
                    }
                </ul>
            </div>
            <br />
            <hr />
            {userName === null ? 
            noComment() : okComment()}
        </div>
    );
}

export default CommentDescription;