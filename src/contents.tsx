import ContentItem from "./content_item";
import Pagination from "./pagination";

function Contents(props : {articleArray : Array<any>,curPage : [number,any],likeSubmit : any}) {
    return (
        <div className = "contents">
            <ContentItem articleArray = {props.articleArray} likeSubmit = {props.likeSubmit}/>
            <Pagination curPage = {props.curPage}/>
        </div>
    );
}

export default Contents;