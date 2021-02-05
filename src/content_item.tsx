import './css/content_item.css';


function ContentItem(props : {articleArray : Array<any>}) {
    return (
        <>
            <div className="contents_head">
                <img src="./image/javascript_function_prototype.PNG" width="32px" height="32px" />
                <div className="contents_head_info">
                    <a href="">글쓴이 1</a>
                    <br/>
                    <span>Tue Feb 02 2021</span>
                </div>
                <div className="contents_like_button">
                    <button className="like_button">
                        <img className = "like_button_image" src = "./image/heart.png"/>
                        1
                    </button>
                </div>
            </div>
            <div className="contents_body">
                <h3>머릿말1</h3>
                <p>내용1</p>
                <span> read more...</span>
            </div>
            <hr/>
        </>
    );
}

export default ContentItem;