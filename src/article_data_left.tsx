import Contents from "./contents";
import GlobalFeed from "./global_feed";

function ArticleDataLeft(props : {articleArray : Array<any>, articleCount : number}) {
    return (
        <div className = "body_data_left">
            <GlobalFeed/>
            <Contents articleArray = {props.articleArray} articleCount = {props.articleCount}/>
        </div>
    );
}

export default ArticleDataLeft;