import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "./article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';
import {MakeDate,MakeIndex} from './module';

function UserArticle(props: { profile: any }) {
    const [tagList, settagLists] = useState<Array<any>>([]);
    const [article, setArticle] = useState<[Array<any>, number]>([[], 0]);
    const [curPage, setCurPage] = useState<number>(0);
    const [curTag, setcurTag] = useState<string>("");
    const [preTag, setPreTag] = useState<string>("");

    useEffect(() => {
        axios
            .get("https://conduit.productionready.io/api/tags")
            .then((res: any) => {
                const tagList: Array<any> = res.data.tags;
                settagLists(tagList);
            })
    }, []);

    useEffect(() => {

        let headers: any;
        if (localStorage.getItem('token') != null) {
            headers = {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            };
        }

        const page = curPage * 10;
        // curTag가 ""이고 page 0 일때(Your feed 첫페이지 로드)
        if (curTag === "" && page === 0) {
            axios
                .get(`https://conduit.productionready.io/api/articles/feed?limit=10`, headers)
                .then((res: any) => {
                    const articleArray: Array<any> = res.data.articles;
                    const totalArticles: number = res.data.articlesCount;
                    console.log(articleArray);
                    setArticle([articleArray.map((item : any)=> (
                        {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                    )), totalArticles / 10]);
                });
        }
        // tag가 선택이 되었고 page를 움직이는 상황
        else if (curTag !== "" && page !== 0) {
            // tag가 동일한 상태에서 page를 움직이는 경우
            if (curTag === preTag) {
                // 그게 global feed가 아닌 경우
                if (curTag !== "global") {
                    axios
                        .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10&offset=${page}`, headers)
                        .then((res: any) => {
                            const articleArray: Array<any> = res.data.articles;
                            console.log(articleArray);
                            setArticle([articleArray.map((item : any)=> (
                                {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                            )), article[1]]);
                        });
                }
                // global인 경우
                else {
                    axios
                        .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`, headers)
                        .then((res: any) => {
                            const articleArray: Array<any> = res.data.articles;
                            console.log(articleArray);
                            setArticle([articleArray.map((item : any)=> (
                                {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                            )), article[1]]);
                        });
                }
            }
            // 다른 tag로 바꾸는 경우 다시 page는 0으로 
            else {
                setCurPage(0);
                setPreTag(curTag);
            }
        }
        // Your feed인데 page를 움직이는 상황
        else if (curTag === "" && page !== 0) {
            if (curTag === preTag) {
                axios
                    .get(`https://conduit.productionready.io/api/articles/feed?limit=10&offset=${page}`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        console.log(articleArray);
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )), article[1]]);
                    });
            }
            // 다른 tag로 바꾸는 경우 page는 0으로
            else {
                setCurPage(0);
                setPreTag(curTag);
            }
        }
        // tag가 선택되었는데, 첫 page인 상황
        else if (curTag !== "" && page === 0) {
            if (curTag !== "global") {
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles: number = res.data.articlesCount;
                        console.log(articleArray);
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )), totalArticles / 10]);
                    });
            }
            else {
                axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles: number = res.data.articlesCount;
                        console.log(articleArray);
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )), totalArticles / 10]);
                        setPreTag("global");
                    });
            }
        }
    }, [curTag, curPage, preTag, props.profile.username]);



    const handleLikeSubmit = (slug: any) => {
        axios
            .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`, {}, {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => {
                const resArticle = res.data.article;
                setArticle(
                    [article[0].map((item:any)=> (item.slug === resArticle.slug ? 
                        {...item,favorited : !item.favorited,
                            favoritesCount : item.favoritesCount + 1}:item)),article[1]]
                )
            })
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
                const resArticle = res.data.article;
                setArticle(
                    [article[0].map((item:any)=> (item.slug === resArticle.slug ? 
                        {...item,favorited : !item.favorited,
                            favoritesCount : item.favoritesCount - 1}:item)),article[1]]
                )
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (

        <div className="row">
            <ArticleDataLeft article={article} curPage={[curPage, setCurPage]} likeSubmit={handleLikeSubmit} disLikeSubmit={handleDisLikeSubmit}
                curTag={[curTag, setcurTag]} profile={props.profile} preTag={[preTag, setPreTag]}
                curProfileTag={["", ""]} preProfileTag={["", ""]} />
            <TagList tagList={tagList} profile={props.profile} curTag={[curTag, setcurTag]} preTag={[preTag, setPreTag]} />
        </div>
    );
}

export default UserArticle;