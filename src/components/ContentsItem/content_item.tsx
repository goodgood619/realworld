import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import * as Styled from './styled';

function ContentItem(props: { articleArray: Array<any>, likeSubmit: any, disLikeSubmit: any, profile: boolean }) {
    let arr = props.articleArray;
    const contents = () => {
        let data: Array<any> = [];
        data = arr.map((item: any) => (
            <Fragment key={item.unique}>
                <Styled.ContentsHeaderContainer>
                    <img src={item.author.image} alt="" width="32px" height="32px" />
                    <Styled.ContentHeaderInfoContainer>
                        <Link to={`/profile/${item.author.username}`} className="link-title">
                            {item.author.username}
                        </Link>
                        <br />
                        <span>{item.createdAt}</span>
                    </Styled.ContentHeaderInfoContainer>
                    <Styled.ContentLikeButtonContainer>
                        <Styled.ContentLikeButton className={item.favorited === true ? "like_button" : "nolike_button"} onClick={item.favorited === false ? () => props.likeSubmit(item.slug) :
                            () => props.disLikeSubmit(item.slug)}>
                            <Styled.ContentImgButton src={props.profile === false ? "./image/heart.png" : "../image/heart.png"} alt="" />
                                &nbsp;{item.favoritesCount}
                        </Styled.ContentLikeButton>
                    </Styled.ContentLikeButtonContainer>
                </Styled.ContentsHeaderContainer>
                <Styled.ContentBodyContainer>
                    <Styled.ContentLink to={{
                        pathname: "/comment",
                        state: {
                            title: JSON.stringify(item.title),
                            description: JSON.stringify(item.description),
                            author: JSON.stringify(item.author.username),
                            createdAt: JSON.stringify(item.createdAt),
                            tagList: JSON.stringify(item.tagList),
                            slug: JSON.stringify(item.slug),
                            body: JSON.stringify(item.body),
                            img : JSON.stringify(item.author.image)
                        }
                    }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <Styled.ContentTagContainer>
                            <span> read more...</span>
                            <Styled.ContentUlTag>
                                {
                                    item.tagList.map((item: any, index: any) => (
                                        <Styled.ContentLiItem>{item}</Styled.ContentLiItem>
                                    ))
                                }
                            </Styled.ContentUlTag>
                        </Styled.ContentTagContainer>
                    </Styled.ContentLink>
                </Styled.ContentBodyContainer>
                <hr />
            </Fragment>
        ))
        return data;
    };
    if (props.articleArray.length > 0) {
        return (
            <>
                {contents()}
            </>
        );
    }
    else {
        return (
            <Styled.ContentNoArticleContainer>
                No articles are here... yet.
            </Styled.ContentNoArticleContainer>
        );
    }
}

export default ContentItem;