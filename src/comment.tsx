import Banner from "./banner";
import CommentBanner from "./commentBanner";
import CommentDescription from "./commentDescription";
import Header from "./header";

function Comment(props : {state: any}) {
    const title = props.state;
    console.log(title);
    return (
        <>
        <Header/>
        <CommentBanner/>
        <CommentDescription/>
        </>
    );
}

export default Comment;