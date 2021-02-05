import './css/content_item.css';


function ContentItem(props: { articleArray: Array<any>,likeSubmit : any }) {
    let arr = props.articleArray;
    const contents = () => {
        let data: Array<any> = [];
        for (let i = 0; i < arr.length; i++) {
            data.push(
                <>
                    <div className="contents_head">
                        <img src={arr[i].author.image} width="32px" height="32px" />
                        <div className="contents_head_info">
                            <a>{arr[i].author.username}</a>
                            {/* onClick으로 user Profile 관련 부분으로 이동시키면됨, 파라미터는 arr[i].author.username을 써서 보내자 */}
                            <br />
                            <span>{arr[i].createdAt}</span>
                        </div>
                        <div className="contents_like_button">
                            <button className="like_button" onClick={() => props.likeSubmit(arr[i].slug)}>
                                <img className="like_button_image" src="./image/heart.png" />
                                {arr[i].favoritesCount}
                            </button>
                        </div>
                    </div>
                    <div className="contents_body">
                        <h3>{arr[i].title}</h3>
                        <p>{arr[i].description}</p>
                        <span> read more...</span>
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