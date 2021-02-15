import axios from 'axios';
import { useState } from 'react';
import './css/newpostForm.css';

function NewpostForm(props: { history: any, title: string, description: string, body: string, tagList: Array<any>,edit : Boolean,slug : string }) {
    const [newArticleTitle, setnewArticleTitle] = useState<string>("");
    const [newArticleAbout, setnewArticleAbout] = useState<string>("");
    const [newArticleComment, setnewArticleComment] = useState<string>("");
    const [newArticleTags, setnewArticleTags] = useState<string>("");

    const handlePost = (e: any) => {
        e.preventDefault();
        const arr: Array<string> = newArticleTags.split(" ");
        if(props.edit === false) {
            const data = {
                "title": newArticleTitle,
                "description": newArticleAbout,
                "body": newArticleComment,
                "tagList": arr
            };
            axios
            .post('https://conduit.productionready.io/api/articles', data, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                // comment로 내용전달이 
                    const data = res.data.article;
                props.history.push("/comment", {
                    title: data.title,
                    description: data.description,
                    author: data.author.username,
                    createdAt: data.createdAt,
                    tagList: data.tagList,
                    slug: data.slug,
                    body: data.body,
                });
            })
            .catch((err: any) => {
                console.log(err);
            });
        }
        else {
            const data = {
                "title": newArticleTitle,
                "description": newArticleAbout,
                "body": newArticleComment,
            };
            axios
            .put(`https://conduit.productionready.io/api/articles/${props.slug}`, data, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                const data = res.data.article;
                props.history.push("/comment", {
                    title: data.title,
                    description: data.description,
                    author: data.author.username,
                    createdAt: data.createdAt,
                    tagList: data.tagList,
                    slug: data.slug,
                    body: data.body,
                });
            })
            .catch((err: any) => {
                console.log(err);
            });
        }
    };

    return (
        <div className="newpost">
            <form className="signinForm" onSubmit={handlePost}>
                <fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder="Article Title" defaultValue = {props.title} onChange={e => setnewArticleTitle(e.target.value)}  />
                    </fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder="What's this article about?" defaultValue = {props.description} onChange={e => setnewArticleAbout(e.target.value)}  />
                    </fieldset>
                    <fieldset>
                        <input className="post_article" type="text" placeholder="Write your article(in markdown)" defaultValue = {props.body} onChange={e => setnewArticleComment(e.target.value)}  />
                    </fieldset>
                    <fieldset>
                        <input className="post" type="text" placeholder="Enter tags" defaultValue = {props.tagList} onChange={e => setnewArticleTags(e.target.value)} />
                    </fieldset>
                    <button className="signin" type="submit">Publish Article</button>
                </fieldset>
            </form>
        </div>
    );
}

export default NewpostForm;