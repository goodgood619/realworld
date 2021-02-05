import ContentItem from "./content_item";
import Pagination from "./pagination";

function Contents(props : {articleArray : Array<any>, articleCount : number}) {
    return (
        <div className = "contents">
            <ContentItem articleArray = {props.articleArray}/>
            <Pagination articleCount = {props.articleCount}/>
        </div>
    );
}

export default Contents;