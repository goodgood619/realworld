import './css/global_feed.css';

function GlobalFeed(props : {curTag : [string,any],profile : any,preTag : [string,any],
    curProfileTag : [string,any],preProfileTag : [string,any]}) {
    const profileUsername = props.profile.username;
    if (profileUsername === undefined) {
        const userName = localStorage.getItem('username');
        return (
            <>
            <div className="global_feed">
                {
                    userName !== null ? <li className ={props.curTag[0]===""?"global_feed_active":"global_feed"} onClick = {()=> props.curTag[1]("")}>Your Feed</li> : <></> 
                }
                <li className={props.curTag[0]==="global"?"global_feed_active":"global_feed"} onClick = {()=> {props.curTag[1]("global"); props.preTag[1](props.curTag[0]);}}>
                    Global Feed
                </li>
                <li className={props.curTag[0]!=="global" && props.curTag[0]!==""?"global_feed_active":"global_feed" }>
                    {props.curTag[0] === "global"?"" :props.curTag[0]}
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
}

export default GlobalFeed;