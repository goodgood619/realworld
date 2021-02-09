import { Link } from 'react-router-dom';
import './css/content_item.css';


function ContentItem(props: { articleArray: Array<any>, likeSubmit: any }) {
    let arr = props.articleArray;
    const contents = () => {
        let data: Array<any> = [];
        for (let i = 0; i < arr.length; i++) {
            console.log('favorited : ',arr[i].favorited);
            data.push(
                <>
                    <div className="contents_head">
                        <img src={arr[i].author.image} alt="" width="32px" height="32px" />
                        <div className="contents_head_info">
                            <Link to={`/profile/${arr[i].author.username}`} className="link-title">
                                {arr[i].author.username}
                            </Link>
                            <br />
                            <span>{arr[i].createdAt}</span>
                        </div>
                        <div className="contents_like_button">
                            <button className={arr[i].favorited === true ? "like_button":"nolike_button"} onClick={() => props.likeSubmit(arr[i].slug)}>
                                <img className="like_button_image" src="./image/heart.png" alt="" />
                                {arr[i].favoritesCount}
                            </button>
                        </div>
                    </div>
                    <div className="contents_body">
                        <Link to={{
                            pathname: "/comment",
                            state: {
                                title: arr[i].title,
                                description: arr[i].description,
                                author: arr[i].author.username,
                                createdAt: arr[i].createdAt,
                                tagList : arr[i].tagList,
                                slug : arr[i].slug,
                                body : arr[i].body,
                            }
                        }} className="link">
                            <h3>{arr[i].title}</h3>
                            <p>{arr[i].description}</p>
                            <div className="content_tag_position">
                                <span> read more...</span>
                                <ul className="content_tag">
                                    {
                                        arr[i].tagList.map((item: any, index: any) => (
                                            <li className="content_tag_item">{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Link>
                    </div>
                    <hr />
                </>
            );
        }
        return data;
    };
    return (
        <>
            {contents()}
        </>
    );
}

export default ContentItem;