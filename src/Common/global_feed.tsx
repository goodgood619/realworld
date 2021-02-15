import MyMobxTag from '../Article/mobx-article-tag';
import './css/global_feed.css';
import {observer} from 'mobx-react-lite';


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
                    userName !== null ? <li className ={curTag===""?"global_feed_active":"global_feed"} onClick = {()=> MyMobxTag.setTag({curTag : "",testpage : 0})}>Your Feed</li> : <></> 
                }
                <li className={curTag==="global"?"global_feed_active":"global_feed"} onClick = {()=> {MyMobxTag.setTag({curTag : "global",testpage : 0});}}>
                    Global Feed
                </li>
                <li className={curTag!=="global" && curTag!==""?"global_feed_active":"global_feed" }>
                    {curTag === "global"?"" :curTag}
                </li>
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
                    <li className={props.curProfileTag[0]===""? "global_feed_active" : "global_feed"} onClick = {()=> {props.curProfileTag[1](""); props.preProfileTag[1](props.preProfileTag[0]);}}>
                        My Articles
                    </li>
                    <li className={props.curProfileTag[0]==="favorite"?"global_feed_active":"global_feed"} onClick = {()=> {props.curProfileTag[1]("favorite"); props.preProfileTag[1]("");}}>
                        Favorited Articles
                    </li>
                </div>
                <br/>
                <hr />
            </>
        );
    }
});

export default GlobalFeed;