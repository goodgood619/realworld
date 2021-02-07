import React, { useState, useEffect } from 'react';
import ArticleDataLeft from "./article_data_left";
import TagList from "./taglist";
import './css/article.css';
import axios from 'axios';

function Article(props: { profile: any }) {
    const [tagList, settagLists] = useState<Array<any>>([]);
    const [articleArray, setArticleArray] = useState<Array<any>>([]);
    const [curPage, setCurPage] = useState<number>(0);
    const [curTag, setcurTag] = useState<string>("");
    const [profile, setProfile] = useState<any>(props.profile);

    useEffect(() => {
        axios
            .get("https://conduit.productionready.io/api/tags")
            .then((res: any) => {
                const test: Array<any> = res.data.tags;
                settagLists(test);
            })
    }, []);

    useEffect(() => {

        const username = profile.username;
        console.log('username : ',username);
        // pagination과 myarticle이냐 favorited이냐(tag)
        if(username !== undefined) {
            
            if(curTag === "") {
                axios
            .get(`https://conduit.productionready.io/api/articles?author=${username}&limit=10`)
            .then((res: any) => {
                const articleArray: Array<any> = res.data.articles;
                setArticleArray(articleArray);
            });
            }
        }
        // pagination과 tag
        else if (username === undefined) {
            const page = curPage * 10;
            // curTag가 ""이고 page 0 일때(global feed 첫페이지 로드)
            if (curTag === "" && page === 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?&limit=10`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticleArray(articleArray);
                    });
            }
            // tag가 선택이 되었고 page를 움직이는 상황
            else if (curTag !== "" && page !== 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10&offset=${page}`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticleArray(articleArray);
                    });
            }
            // global feed인데 page를 움직이는 상황
            else if (curTag === "" && page !== 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?limit=10&offset=${page}`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticleArray(articleArray);
                    });
            }
            // tag가 선택되었는데, 첫 page인 상황
            else if (curTag !== "" && page === 0) {
                axios
                    .get(`https://conduit.productionready.io/api/articles?tag=${curTag}&limit=10`)
                    .then((res: any) => {
                        const articleArray: Array<any> = res.data.articles;
                        setArticleArray(articleArray);
                    });
            }
        }
    }, [curTag, curPage, profile]);

    const handleLikeSubmit = (slug: any) => {
        console.log(slug);
        const headers = {
            'Authorization': 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3GEMA0IICOfFMVXY7kkTX1wr4qCyhIf58Ul',
        }
        axios
            .post(`https://conduit.productionready.io/api/articles/${slug}/favorite`, { headers })
            .then((res: any) => console.log(res));

    };

    return (

        <div className="row">
            <ArticleDataLeft articleArray={articleArray} curPage={[curPage, setCurPage]} likeSubmit={handleLikeSubmit}
                curTag={[curTag, setcurTag]} profile={[profile, setProfile]} />
            <TagList tagList={tagList} curTag={[curTag, setcurTag]} />
        </div>
    );
}

export default Article;