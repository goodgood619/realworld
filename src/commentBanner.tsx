import {Link} from 'react-router-dom';
import './css/commentBanner.css';
import axios from 'axios';

function CommentBanner(props: { title: string, body: string,author : string, createdAt: any,description : string, tagList : Array<any>,history : any, slug : any }) {
    const userName = localStorage.getItem('username');


    const handleDelete = (e:any) => {
        e.preventDefault();
        axios
        .delete(`https://conduit.productionready.io/api/articles/${props.slug}`,{
            headers : {
                "Authorization" : `Token ${localStorage.getItem('token')}`
            }
        })
        .then((res:any)=> {
            props.history.push("/userHome");
        })
        .catch((err:any)=>{
            console.log(err);
        });
    };

    const userBanner = () => {
        let arr: Array<any> = [];
        arr.push(
            <>
            <Link to = {{pathname : "/newpost",
            state : {
                title : props.title,
                body : props.body,
                description : props.description,
                tagList : props.tagList,
                edit : true,
                slug : props.slug,
            }}} >
                <button className="comment_edit_user">Edit Article</button>
            </Link>
            <button className="comment_delete_user" onClick = {handleDelete}>Delete Article</button>
            </>
        );
        return arr;
    }
    return (
        <div className="comment_root">
            <div className="comment">
                <h1 className="comment_title">{props.title}</h1>
                <img src="./image/github.PNG" width="32px" height="32px" alt="" />
                <div className="comment_author">
                    <span>{props.author}</span>
                    <br />
                    <span>{props.createdAt}</span>
                    {
                        userName !== null && userName === props.author ?userBanner() : ""
                    }
                </div>
            </div>
        </div>
    );
}

export default CommentBanner;
