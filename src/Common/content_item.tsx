import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './css/content_item.css';


function ContentItem(props: { articleArray: Array<any>, likeSubmit: any, disLikeSubmit: any, profile: boolean }) {
    let arr = props.articleArray;
    const contents = () => {
        let data: Array<any> = [];
        data = arr.map((item: any) => (
            <Fragment key={item.unique}>
                <div className="contents_head">
                    <img src={item.author.image} alt="" width="32px" height="32px" />
                    <div className="contents_head_info">
                        <Link to={`/profile/${item.author.username}`} className="link-title">
                            {item.author.username}
                        </Link>
                        <br />
                        <span>{item.createdAt}</span>
                    </div>
                    <div className="contents_like_button">
                        <button className={item.favorited === true ? "like_button" : "nolike_button"} onClick={item.favorited === false ? () => props.likeSubmit(item.slug) :
                            () => props.disLikeSubmit(item.slug)}>
                            <img className="like_button_image" src={props.profile === false ? "./image/heart.png" : "../image/heart.png"} alt="" />
                                &nbsp;{item.favoritesCount}
                        </button>
                    </div>
                </div>
                <div className="contents_body">
                    <Link to={{
                        pathname: "/comment",
                        state: {
                            title: item.title,
                            description: item.description,
                            author: item.author.username,
                            createdAt: item.createdAt,
                            tagList: item.tagList,
                            slug: item.slug,
                            body: item.body,
                        }
                    }} className="link">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="content_tag_position">
                            <span> read more...</span>
                            <ul className="content_tag">
                                {
                                    item.tagList.map((item: any, index: any) => (
                                        <li className="content_tag_item">{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Link>
                </div>
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
            <div className="no_article">
                No articles are here... yet.
            </div>
        );
    }
}

export default ContentItem;