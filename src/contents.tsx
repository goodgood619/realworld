import ContentItem from "./content_item";
import Pagination from "./pagination";

function Contents(props : {article : [Array<any>,number],curPage : [number,any],likeSubmit : any,disLikeSubmit : any,profile : boolean}) {
    return (
        <div className = "contents">
            <ContentItem articleArray = {props.article[0]} likeSubmit = {props.likeSubmit} disLikeSubmit = {props.disLikeSubmit}
            profile = {props.profile}/>
            <Pagination curPage = {props.curPage} articleCount = {props.article[1]}/>
        </div>
    );
}

export default Contents;