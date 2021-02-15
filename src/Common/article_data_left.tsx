import Contents from "./contents";
import GlobalFeed from "./global_feed";
import {observer} from 'mobx-react-lite';


const ArticleDataLeft = observer((props : {article : [Array<any>,number],curPage : [number,any],likeSubmit : any, disLikeSubmit : any,
profile : any,curProfileTag : [string,any],preProfileTag : [string,any]}) => {
    return (
        <div className = "body_data_left">
            <GlobalFeed  profile = {props.profile}
            curProfileTag = {props.curProfileTag} preProfileTag = {props.preProfileTag}/>
            <Contents article = {props.article}  
            curPage = {props.curPage} likeSubmit ={props.likeSubmit} disLikeSubmit = {props.disLikeSubmit}
            profile = {props.profile === ""?false : true}/>
        </div>
    );
});

export default ArticleDataLeft;