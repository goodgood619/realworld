import Contents from "./contents";
import GlobalFeed from "./global_feed";

function ArticleDataLeft(props : {articleArray : Array<any>,curPage : [number,any],likeSubmit : any}) {
    return (
        <div className = "body_data_left">
            <GlobalFeed/>
            <Contents articleArray = {props.articleArray}  
            curPage = {props.curPage} likeSubmit ={props.likeSubmit}/>
        </div>
    );
}

export default ArticleDataLeft;