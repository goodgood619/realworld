import './css/commentDescription.css';

function CommentDescription(){
    return (
        <div className = "comment">
            <div className = "comment_description">
            Descrition
            </div>
            <hr/>
            <div className = "comment_sign">
                Sign in or sign up to add comments on this article.
            </div>
            <div className = "comment_list">
                <textarea className = "comment_textarea" placeholder = "Write a comment...">

                </textarea>
                <div className = "comment_footer_user">
                    <img src = "./image/github.PNG" width = "32px" height = "32px" alt = ""/>
                    <button className = "comment_post">Post Comment</button>
                </div>

                <textarea className = "comment_textarea" readOnly>
                    adsfasdf
                </textarea>
                <div className = "comment_footer">
                    <img src = "./image/github.PNG" width = "32px" height = "32px" alt = ""/>
                    <span>author</span>
                    <span>날짜</span>
                </div>
            </div>
        </div>
    );
}

export default CommentDescription;