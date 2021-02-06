import React, {useState,useEffect} from 'react';
import ArticleDataLeft from "./article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';

function Article() {
    const [tagList,settagLists] = useState<Array<any>>([]);
    const [articleArray,setArticleArray] = useState<Array<any>>([]);
    const [articleCount,setArticleCount] = useState<number>(0);
    const [curPage, setCurPage] = useState<number>(0);

    useEffect(()=>{
        axios
        .get("https://conduit.productionready.io/api/tags")
        .then((res : any) => {
            const test : Array<any> = res.data.tags;
            settagLists(test);
        })
    },[tagList]);

    useEffect(() => {
        const page = curPage*10;
        axios
        .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`)
        .then((res: any) => {
            const articleArray : Array<any> = res.data.articles;
            const articleCount :number = res.data.articlesCount;
            setArticleArray(articleArray);
            setArticleCount(articleCount);
        });
    },[articleArray,articleCount,curPage])

    const handleLikeSubmit = (slug : any) => {
        console.log(slug);
        const headers = {
            'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l',
        }
        axios
        .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,{headers})
        .then((res:any)=>console.log(res));
        
    };

    return (

        <div className = "row">
            <ArticleDataLeft articleArray = {articleArray} curPage = {[curPage,setCurPage]} likeSubmit = {handleLikeSubmit}/>
            <TagList tagList = {tagList}/>
        </div>
    );
}

export default Article;