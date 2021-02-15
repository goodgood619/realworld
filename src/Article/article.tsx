import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "../Common/article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';
import {MakeDate,MakeIndex} from '../Common/module';
import MyMobxTag from './mobx-article-tag';
import {observer} from 'mobx-react-lite';
import { autorun } from 'mobx';


const Article = observer((props: { profile: any })=> {
    const [tagList, settagLists] = useState<Array<any>>([]);
    const [article, setArticle] = useState<[Array<any>,number]>([[],50]);
    const [curPage, setCurPage] = useState<number>(0);

    useEffect(() => {
        axios
            .get("https://conduit.productionready.io/api/tags")
            .then((res: any) => {
                const tagList: Array<any> = res.data.tags;
                settagLists(tagList);
            })
    }, []);

    useEffect(() => autorun(() => {
        
        let headers :any;
        if(localStorage.getItem('token') != null) {
            headers = {
                headers : {
                    "Authorization" : `Token ${localStorage.getItem('token')}`
                }
            };
        }

            const page = curPage * 10;
            // curTag가 ""이고 page 0 일때(global feed 첫페이지 로드)
            console.log('curPage : ',curPage);
            console.log('page : ',page);
            const curTag = MyMobxTag.getCurTag();
            const preTag = MyMobxTag.getPreTag();
            if (curTag === "global" && page === 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles : number = res.data.articlesCount;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )),totalArticles/10]);
                    });
            }
            // tag가 선택이 되었고 page를 움직이는 상황
            else if (curTag !== "global" && page !== 0) {
                // tag가 동일한 상태에서 page를 움직이는 경우
                if(curTag === preTag) {
                    axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10&offset=${page}`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )),article[1]]);
                    });
                }
                // 다른 tag로 바꾸는 경우 다시 page는 0으로 
                else {
                    setCurPage(0);
                    MyMobxTag.setPreTag(curTag);
                }
            }
            // global feed인데 page를 움직이는 상황
            else if (curTag === "global" && page !== 0) {
                if(curTag === preTag) {
                    axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )),article[1]]);
                    });
                }
                // 다른 tag로 바꾸는 경우 page는 0으로
                else {
                    setCurPage(0);
                    MyMobxTag.setPreTag(curTag);
                }
            }
            // tag가 선택되었는데, 첫 page인 상황
            else if (curTag !== "global" && page === 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles : number = res.data.articlesCount;
                        setArticle([articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )),totalArticles/10]);
                    });
            }
    }), [curPage,props.profile.username]);

    const handleLikeSubmit = (slug: any) => {

        axios
            .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,{},{
                headers : {
                    "Authorization" : `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => console.log(res))
            .catch((err:any)=>{
                const error = err.response;
                if(error.status === 401 || error.status === 422) {
                    alert('현재 로그인 되어있지 않습니다. 로그인이나 회원가입을 해주세요');
                }
            })

    };

    return (

        <div className="row">
            <ArticleDataLeft article={article} curPage={[curPage, setCurPage]} likeSubmit={handleLikeSubmit} disLikeSubmit = {""}
                profile={props.profile} curProfileTag = {["",""]} preProfileTag = {["",""]}/>
            <TagList tagList={tagList} profile = {props.profile}/>
        </div>
    );
});

export default Article;