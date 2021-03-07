import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './styled';
import {API_URL} from '../../constants/constants';


function CommentDescription(props: { description: string, tagList: Array<any>, slug: string }) {
    const userName = localStorage.getItem('username');
    const [userComment, setUserComment] = useState<string>("");
    const [commentArray, setCommentArray] = useState<Array<any>>([]);

    // getComments from backend
    useEffect(() => {
        axios
            .get(`${API_URL}/articles/${props.slug}/comments`)
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
            .post(`${API_URL}/articles/${props.slug}/comments`, data, {
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
            .delete(`${API_URL}/articles/${props.slug}/comments/${id}`, {
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
                <Styled.CommentSignLink to="/signin">
                    Sign in
                </Styled.CommentSignLink>
                &nbsp;or&nbsp;
                <Styled.CommentSignLink to="/signup">
                    Sign up
                </Styled.CommentSignLink>&nbsp;to add comments on this article.
            </div>
        );
        return arr;
    };

    const okComment = () => {
        let arr: Array<any> = [];
        arr.push(
            <Styled.CommentListContainer>

                {/* 나의 코멘트 */}
                <form onSubmit = {handleComment}>
                    <Styled.CommentTextArea placeholder="Write a comment..." onChange = {e=> setUserComment(e.target.value)}>
                    </Styled.CommentTextArea>
                    <Styled.CommentFooterUserContainer>
                        <img src="./image/github.PNG" width="32px" height="32px" alt="" />
                        <Styled.CommentPostButton type = "submit">Post Comment</Styled.CommentPostButton>
                    </Styled.CommentFooterUserContainer>
                </form>

                {
                    commentArray.map((item: any) => (
                        <Fragment key = {item.unique}>
                            <Styled.CommentTextArea value = {item.body} readOnly>
                            </Styled.CommentTextArea>
                            <Styled.CommentFooterContainter>
                                <img src={item.author.image} width="32px" height="32px" alt="" />
                                <Link to={`/profile/${item.author.username}`}>
                                    <Styled.CommentSpanOther>{item.author.username}</Styled.CommentSpanOther>
                                </Link>
                                <Styled.CommentSpanOtherCreated>{item.createdAt}</Styled.CommentSpanOtherCreated>
                                {
                                    userName === item.author.username ? <Styled.CommentTrashButton onClick={(e) => handleDeleteComment(e, item.id)}>
                                        <img src="./image/trash.PNG" alt="" width="15px" height="15px" />
                                    </Styled.CommentTrashButton> : ""
                                }
                            </Styled.CommentFooterContainter>
                        </Fragment>
                    ))
                }
            </Styled.CommentListContainer>);
        return arr;
    };
    return (
        <Styled.CommentContainer>
            <div className="comment_description">
                {props.description}
                <Styled.CommentUlTag>
                    {
                        props.tagList.map((item: any) => (
                            <Fragment key = {item.unique}>
                                <Styled.CommentLiItem>{item}</Styled.CommentLiItem>
                            </Fragment>
                        ))
                    }
                </Styled.CommentUlTag>
            </div>
            <br />
            <hr />
            {userName === null ? 
            noComment() : okComment()}
        </Styled.CommentContainer>
    );
}

export default CommentDescription;