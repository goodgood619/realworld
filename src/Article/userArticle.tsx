import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "../Common/article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';
import { MakeDate, MakeIndex } from '../Common/module';
import MyMobxTag from './mobx-article-tag';
import { autorun } from 'mobx';

function UserArticle(props: { profile: any }) {
    const [tagList, settagLists] = useState<Array<any>>([]);
    const [article, setArticle] = useState<[Array<any>, number]>([[], 0]);

    useEffect(() => {
        axios
            .get("https://conduit.productionready.io/api/tags")
            .then((res: any) => {
                const tagList: Array<any> = res.data.tags;
                settagLists(tagList);
            })
    }, []);

    useEffect(() => autorun(() => {

        let headers: any;
        if (localStorage.getItem('token') != null) {
            headers = {
                headers: {
                    "Authorization": `Token ${localStorage.getItem('token')}`
                }
            };
        }

        const { curTag, testpage } = MyMobxTag.getTag();
        console.log('article curTag : ', curTag, 'page : ', testpage);
        const page = testpage * 10;
        // curTag가 ""이고 page 0 일때(global feed 첫페이지 로드)
        console.log('page : ', page);
        // curTag가 ""이고 page 0 일때(Your feed 첫페이지 로드)
        if (curTag === "" && page === 0) {
            axios
                .get(`https://conduit.productionready.io/api/articles/feed?limit=10`, headers)
                .then((res: any) => {
                    const articleArray: Array<any> = res.data.articles;
                    let totalArticles: number = res.data.articlesCount;
                    setArticle([articleArray.map((item: any) => (
                        { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                    )), totalArticles / 10]);
                });
        }
        // tag가 선택이 되었고 page를 움직이는 상황
        else if (curTag !== "" && page !== 0) {
                // 그게 global feed가 아닌 경우
                if (curTag !== "global") {
                    axios
                        .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10&offset=${page}`, headers)
                        .then((res: any) => {
                            const articleArray: Array<any> = res.data.articles;
                            setArticle([articleArray.map((item: any) => (
                                { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                            )), article[1]]);
                        });
                }
                // global인 경우
                else {
                    axios
                        .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`, headers)
                        .then((res: any) => {
                            const articleArray: Array<any> = res.data.articles;
                            setArticle([articleArray.map((item: any) => (
                                { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                            )), article[1]]);
                        });
                }
        }
        // Your feed인데 page를 움직이는 상황
        else if (curTag === "" && page !== 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles/feed?limit=10&offset=${page}`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray.map((item: any) => (
                            { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                        )), article[1]]);
                    });
        }
        // tag가 선택되었는데, 첫 page인 상황
        else if (curTag !== "" && page === 0) {
            if (curTag !== "global") {
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        let totalArticles: number = res.data.articlesCount;
                        setArticle([articleArray.map((item: any) => (
                            { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                        )), totalArticles / 10]);
                    });
            }
            else {
                axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10`, headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        let totalArticles: number = res.data.articlesCount;
                        setArticle([articleArray.map((item: any) => (
                            { ...item, createdAt: MakeDate(item.createdAt), unique: MakeIndex() }
                        )), totalArticles / 10]);
                    });
            }
        }
    }), [props.profile.username]);



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
                    [article[0].map((item: any) => (item.slug === resArticle.slug ?
                        {
                            ...item, favorited: !item.favorited,
                            favoritesCount: item.favoritesCount + 1
                        } : item)), article[1]]
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
                    [article[0].map((item: any) => (item.slug === resArticle.slug ?
                        {
                            ...item, favorited: !item.favorited,
                            favoritesCount: item.favoritesCount - 1
                        } : item)), article[1]]
                )
            })
            .catch((err: any) => {
                console.log(err);
            });
    };

    return (

        <div className="row">
            <ArticleDataLeft article={article} likeSubmit={handleLikeSubmit} disLikeSubmit={handleDisLikeSubmit}
                profile={props.profile}
                curProfileTag={["", ""]} preProfileTag={["", ""]} />
            <TagList tagList={tagList} profile={props.profile} />
        </div>
    );
}

export default UserArticle;