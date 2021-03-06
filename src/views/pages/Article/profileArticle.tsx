import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "../../../components/ArticleDataLeft/article_data_left";
import TagList from "../../../components/TagList/taglist";
import './css/article.css';
import axios from 'axios';
import {MakeDate,MakeIndex} from '../../../helpers/module';
import { autorun } from 'mobx';
import MyMobxTag from './mobx-article-tag';

function ProfileArticle(props: { profile: any }) {
    const [article, setArticle] = useState<[Array<any>, number]>([[], 0]);
    const [curProfileTag, setcurProfileTag] = useState<string>("");
    const [preProfileTag, setpreProfileTag] = useState<string>("");

    useEffect(() => autorun(() => {

        const profileUsername = props.profile.username;
        console.log('username : ', profileUsername);
        let headers: any;
        if (localStorage.getItem('token') != null) {
            headers = {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            };
        }
        const { curTag, testpage } = MyMobxTag.getTag();
        const page = testpage * 5;
        // myarticle and first page
        if (curProfileTag === "" && page === 0) {
            axios
                .get(`https://conduit.productionready.io/api/articles?author=${profileUsername}&limit=5&offset=0`, headers)
                .then((res: any) => {
                    const articleArray: Array<any> = res.data.articles;
                    let totalArticles: number = res.data.articlesCount;
                    console.log(totalArticles / 5); 
                    setArticle([articleArray.map((item : any)=> (
                        {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                    )), totalArticles / 5]);
                });
        }
        else if (curProfileTag !== "" && page === 0) {
            axios
                .get(`https://conduit.productionready.io/api/articles?favorited=${profileUsername}&limit=5`, headers)
                .then((res: any) => {
                    const articleArray: Array<any> = res.data.articles;
                    let totalArticles: number = res.data.articlesCount;
                    setArticle([articleArray.map((item : any)=> (
                        {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                    )), totalArticles / 5]);
                    setpreProfileTag(curProfileTag);

                });
        }
        else if (curProfileTag !== "" && page !== 0) {
            if (curProfileTag === preProfileTag) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?favorited=${profileUsername}&limit=5&offset=${page}`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )), article[1]]);
                    });
            }
            else {
                // setCurPage(0);
                setpreProfileTag(curProfileTag);
            }
        }
        else if (curProfileTag === "" && page !== 0) {
            if (curProfileTag === preProfileTag) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?author=${profileUsername}&limit=5&offset=${page}`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )), article[1]]);
                    });
            }
            else {
                // setCurPage(0);
                setpreProfileTag(curProfileTag);
            }
        }
    }), [curProfileTag, preProfileTag, props.profile.username]);

    const handleLikeSubmit = (slug: any) => {

        axios
            .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {}, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => console.log(res))
            .catch((err: any) => {
                const error = err.response;
                if (error.status === 401 || error.status === 422) {
                    alert('현재 로그인 되어있지 않습니다. 로그인이나 회원가입을 해주세요');
                }
            })

    };


    const handleDisLikeSubmit = (slug: any) => {
        axios
            .delete(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                console.log(res);
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (

        <div className="row">
            <ArticleDataLeft article={article} likeSubmit={handleLikeSubmit} disLikeSubmit={handleDisLikeSubmit}
                profile={props.profile}
                curProfileTag={[curProfileTag, setcurProfileTag]} preProfileTag={[preProfileTag, setpreProfileTag]} />
            <TagList tagList={[]} profile={props.profile}/>
        </div>
    );
}

export default ProfileArticle;