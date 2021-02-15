import Contents from "./contents";
import GlobalFeed from "./global_feed";

function ArticleDataLeft(props : {article : [Array<any>,number],curPage : [number,any],likeSubmit : any, disLikeSubmit : any,curTag : [string,any],
profile : any,preTag : [string,any], curProfileTag : [string,any],preProfileTag : [string,any]}) {
    return (
        <div className = "body_data_left">
            <GlobalFeed curTag = {props.curTag} profile = {props.profile} preTag = {props.preTag}
            curProfileTag = {props.curProfileTag} preProfileTag = {props.preProfileTag}/>
            <Contents article = {props.article}  
            curPage = {props.curPage} likeSubmit ={props.likeSubmit} disLikeSubmit = {props.disLikeSubmit}
            profile = {props.profile === ""?false : true}/>
        </div>
    );
}

export default ArticleDataLeft;