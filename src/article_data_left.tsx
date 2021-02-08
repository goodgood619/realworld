import Contents from "./contents";
import GlobalFeed from "./global_feed";

function ArticleDataLeft(props : {articleArray : Array<any>,curPage : [number,any],likeSubmit : any,curTag : [string,any],
profile : any,preTag : [string,any], curProfileTag : [string,any],preProfileTag : [string,any],articleCount : number}) {
    return (
        <div className = "body_data_left">
            <GlobalFeed curTag = {props.curTag} profile = {props.profile} preTag = {props.preTag}
            curProfileTag = {props.curProfileTag} preProfileTag = {props.preProfileTag}/>
            <Contents articleArray = {props.articleArray}  
            curPage = {props.curPage} likeSubmit ={props.likeSubmit} articleCount = {props.articleCount}/>
        </div>
    );
}

export default ArticleDataLeft;