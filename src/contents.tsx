import ContentItem from "./content_item";
import Pagination from "./pagination";

function Contents(props : {articleArray : Array<any>,curPage : [number,any],likeSubmit : any,articleCount : number}) {
    return (
        <div className = "contents">
            <ContentItem articleArray = {props.articleArray} likeSubmit = {props.likeSubmit} />
            <Pagination curPage = {props.curPage} articleCount = {props.articleCount}/>
        </div>
    );
}

export default Contents;