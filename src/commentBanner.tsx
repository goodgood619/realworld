import './css/commentBanner.css';

function CommentBanner() {

    return (
        <div className="comment_root">
            <div className="comment">
                <h1 className="comment_title">title</h1>
                <img src="./image/github.PNG" width="32px" height="32px" alt="" />
                <div className="comment_author">
                    <span>author</span>
                    <br />
                    <span>날짜</span>
                </div>
            </div>
        </div>
    );
}

export default CommentBanner;
