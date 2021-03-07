import {Link} from 'react-router-dom';
import axios from 'axios';
import * as Styled from './styled';
import {API_URL} from '../../constants/constants';

function CommentBanner(props: { title: string, body: string,author : string, createdAt: any,description : string, tagList : Array<any>,history : any, slug : any,img : string }) {
    const userName = localStorage.getItem('username');


    const handleDelete = (e:any) => {
        e.preventDefault();
        axios
        .delete(`${API_URL}/articles/${props.slug}`,{
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
                <Styled.CommentEditButton>Edit Article</Styled.CommentEditButton>
            </Link>
            <Styled.CommentDeleteButton onClick = {handleDelete}>Delete Article</Styled.CommentDeleteButton>
            </>
        );
        return arr;
    }
    
    return (
        <Styled.CommentRootContainer>
            <Styled.CommentContainer>
                <Styled.CommentTitle>{props.title}</Styled.CommentTitle>
                <img src={props.img} width="32px" height="32px" alt="" />
                <Styled.CommentAuthor>
                    <span>{props.author}</span>
                    <br />
                    <span>{props.createdAt}</span>
                    {
                        userName !== null && userName === props.author ? userBanner() : ""
                    }
                </Styled.CommentAuthor>
            </Styled.CommentContainer>
        </Styled.CommentRootContainer>
    );
}

export default CommentBanner;
