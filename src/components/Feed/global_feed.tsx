import MyMobxTag from '../../stores/Article/mobx-article-tag';
import {observer} from 'mobx-react-lite';
import * as Styled from './styled';

const GlobalFeed = observer((props : {profile : any,
    curProfileTag : [string,any],preProfileTag : [string,any]})=> {
    const profileUsername = props.profile.username;
    const curTag = MyMobxTag.getTag().curTag
    if (profileUsername === undefined) {
        const userName = localStorage.getItem('username');
        return (
            <>
            <div className="global_feed">
                {
                    userName !== null ? <Styled.FeedItem className ={curTag===""?"Active":""} onClick = {()=> MyMobxTag.setTag({curTag : "",testpage : 0})}>Your Feed</Styled.FeedItem> : <></> 
                }
                <Styled.FeedItem className={curTag ==="global"?"Active":""} onClick = {()=> {MyMobxTag.setTag({curTag : "global",testpage : 0});}}>
                    Global Feed
                </Styled.FeedItem>
                <Styled.FeedItem className={curTag !=="global" && curTag!==""?"Active":"" }>
                    {curTag === "global"?"" :curTag}
                </Styled.FeedItem>
            </div>
            <br/>
            <hr/>
            </>
        );
    }
    else {
        return (
            <>
                <div className="global_feed">
                    <Styled.FeedItem className={props.curProfileTag[0]===""? "Active" : ""} onClick = {()=> {props.curProfileTag[1](""); props.preProfileTag[1](props.preProfileTag[0]);}}>
                        My Articles
                    </Styled.FeedItem>
                    <Styled.FeedItem className={props.curProfileTag[0]==="favorite"?"Active":""} onClick = {()=> {props.curProfileTag[1]("favorite"); props.preProfileTag[1]("");}}>
                        Favorited Articles
                    </Styled.FeedItem>
                </div>
                <br/>
                <hr />
            </>
        );
    }
});

export default GlobalFeed;