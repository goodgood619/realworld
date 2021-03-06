import ContentItem from "./content_item";
import Pagination from "../../views/pages/Common/pagination";

function Contents(props : {article : [Array<any>,number],likeSubmit : any,disLikeSubmit : any,profile : boolean}) {
    return (
        <div className = "contents">
            <ContentItem articleArray = {props.article[0]} likeSubmit = {props.likeSubmit} disLikeSubmit = {props.disLikeSubmit}
            profile = {props.profile}/>
            <Pagination articleCount = {props.article[1]}/>
        </div>
    );
}

export default Contents;