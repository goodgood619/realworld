import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "../../../components/ArticleDataLeft/article_data_left";
import TagList from "../../../components/TagList/taglist";
import './css/article.css';
import axios from 'axios';
import {MakeDate,MakeIndex} from '../../../helpers/module';
import {observer} from 'mobx-react-lite';
import { autorun } from 'mobx';
import MyMobxTag from '../../../stores/Article/mobx-article-tag';
import {API_URL} from '../../../constants/constants';


const Article = observer((props: { profile: any })=> {
    const article = MyMobxTag.getArticle();
    const articleCount = MyMobxTag.getArticleCount(); 
    const [tagList, settagLists] = useState<Array<any>>([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/tags`)
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

            const {curTag,testpage} = MyMobxTag.getTag();
            console.log('article curTag : ',curTag,'page : ',testpage);
            const page = testpage * 10;
            // curTag가 ""이고 page 0 일때(global feed 첫페이지 로드)
            if (curTag === "global" && page === 0) {
                axios
                    .get(`${API_URL}/articles?limit=10`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        let totalArticles : number = res.data.articlesCount;
                        MyMobxTag.setArticle(articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )));
                        MyMobxTag.setArticleCount(totalArticles/10);
                    });
            }
            // tag가 선택이 되었고 page를 움직이는 상황
            else if (curTag !== "global" && page !== 0) {
                    axios
                    .get(`${API_URL}/articles?tag=${curTag}&limit=10&offset=${page}`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        MyMobxTag.setArticle(articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )));
                    });
                }
            // global feed인데 page를 움직이는 상황
            else if (curTag === "global" && page !== 0) {
                    axios
                    .get(`${API_URL}/articles?limit=10&offset=${page}`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        MyMobxTag.setArticle(articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )));
                    });
            }
            // tag가 선택되었는데, 첫 page인 상황
            else if (curTag !== "global" && page === 0) {
                axios
                    .get(`${API_URL}/articles?tag=${curTag}&limit=10`,headers)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        let totalArticles : number = res.data.articlesCount;
                        MyMobxTag.setArticle(articleArray.map((item : any)=> (
                            {...item,createdAt : MakeDate(item.createdAt), unique : MakeIndex()}
                        )));
                        MyMobxTag.setArticleCount(totalArticles/10);
                    });
            }
    }), [props.profile.username]);

    const handleLikeSubmit = (slug: any) => {

        axios
            .post(`${API_URL}/articles/${slug}/favorite`,{},{
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
            <ArticleDataLeft article={[article,articleCount]} likeSubmit={handleLikeSubmit} disLikeSubmit = {""}
                profile={props.profile} curProfileTag = {["",""]} preProfileTag = {["",""]}/>
            <TagList tagList={tagList} profile = {props.profile}/>
        </div>
    );
});

export default Article;