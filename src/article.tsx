import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "./article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';

function Article(props: { profile: any }) {
    const [tagList, settagLists] = useState<Array<any>>([]);
    const [article, setArticle] = useState<[Array<any>,any]>([[],0]);
    const [curPage, setCurPage] = useState<number>(0);
    const [curTag, setcurTag] = useState<string>("");
    const [preTag, setPreTag] = useState<string>("");
    const [curProfileTag, setcurProfileTag] = useState<string>("");
    const [preProfileTag,setpreProfileTag] = useState<string>("");

    useEffect(() => {
        axios
            .get("https://conduit.productionready.io/api/tags")
            .then((res: any) => {
                const test: Array<any> = res.data.tags;
                settagLists(test);
            })
    }, []);

    useEffect(() => {
        
        const profileUsername = props.profile.username;
        console.log('username : ',profileUsername);
        // pagination과 myarticle이냐 favorited이냐(tag)
        if(profileUsername !== undefined) {
            console.log('curTag : ',curTag);
            const page = curPage * 5;
            
            // myarticle and first page
            if(curProfileTag === "" && page === 0) {
                axios
                .get(`https://conduit.productionready.io/api/articles?author=${profileUsername}&limit=5&offset=0`)
                .then((res:any)=>{
                    const articleArray: Array<any> = res.data.articles;
                    const totalArticles : number = res.data.articlesCount;
                    setArticle([articleArray,totalArticles/5]);
                    console.log(articleArray);
                });
            }
            else if(curProfileTag !== "" && page === 0){
                axios
                .get(`https://conduit.productionready.io/api/articles?favorited=${profileUsername}&limit=5`)
                .then((res:any)=>{
                    const articleArray: Array<any> = res.data.articles;
                    const totalArticles : number = res.data.articlesCount; 
                    setArticle([articleArray,totalArticles/5]);
                    console.log(articleArray);
                });
            }
            else if(curProfileTag !== "" && page !==0) {
                if(curProfileTag === preProfileTag) {
                    axios
                .get(`https://conduit.productionready.io/api/articles?favorited=${profileUsername}&limit=5&offset=${page}`)
                .then((res:any)=>{
                    const articleArray: Array<any> = res.data.articles;
                    setArticle([articleArray,article[1]]);
                    console.log(articleArray);
                });
                }
                else {
                    setCurPage(0);
                    setpreProfileTag(curProfileTag);
                }
            }
            else if(curProfileTag === "" && page !==0) {
                if(curProfileTag === preProfileTag) {
                    axios
                    .get(`https://conduit.productionready.io/api/articles?author=${profileUsername}&limit=5&offset=${page}`)
                    .then((res:any)=>{
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray,article[0]]);
                        console.log(articleArray);
                    });
                }
                else {
                    setCurPage(0);
                    setpreProfileTag(curProfileTag);
                }
            }
        }
        // pagination과 tag
        else if (profileUsername === undefined) {
            const page = curPage * 10;
            // curTag가 ""이고 page 0 일때(global feed 첫페이지 로드)
            if (curTag === "" && page === 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles : number = res.data.articlesCount;
                        setArticle([articleArray,totalArticles/10]);
                    });
            }
            // tag가 선택이 되었고 page를 움직이는 상황
            else if (curTag !== "" && page !== 0) {
                // tag가 동일한 상태에서 page를 움직이는 경우
                if(curTag === preTag) {
                    axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10&offset=${page}`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray,article[1]]);
                    });
                }
                // 다른 tag로 바꾸는 경우 다시 page는 0으로 
                else {
                    setCurPage(0);
                    setPreTag(curTag);
                }
            }
            // global feed인데 page를 움직이는 상황
            else if (curTag === "" && page !== 0) {
                if(curTag === preTag) {
                    axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticle([articleArray,article[1]]);
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
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        const totalArticles : number = res.data.articlesCount;
                        setArticle([articleArray,totalArticles/10]);
                    });
            }
        }
    }, [curTag, curPage,preTag,curProfileTag,preProfileTag,props.profile.username]);

    const handleLikeSubmit = (slug: any) => {
        axios
            .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,{},{
                headers : {
                    "Authorization" : `Token ${localStorage.getItem('token')}`
                }
            })
            .then((res: any) => console.log(res))
            .catch((err:any)=>{
                console.log(err);
            })

    };

    return (

        <div className="row">
            <ArticleDataLeft article={article} curPage={[curPage, setCurPage]} likeSubmit={handleLikeSubmit}
                curTag={[curTag, setcurTag]} profile={props.profile} preTag = {[preTag,setPreTag]} 
                curProfileTag = {[curProfileTag,setcurProfileTag]} preProfileTag = {[preProfileTag,setpreProfileTag]}/>
            <TagList tagList={tagList} profile = {props.profile} curTag={[curTag, setcurTag]} preTag = {[preTag, setPreTag]}/>
        </div>
    );
}

export default Article;