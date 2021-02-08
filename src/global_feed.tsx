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
                    userName !== null ? <li className ="global_feed" onClick = {()=> props.curTag[1](undefined)}>Your Feed</li> : <></> 
                }
                <li className="global_feed" onClick = {()=> {props.curTag[1](""); props.preTag[1](props.curTag[0]);}}>
                    Global Feed
                </li>
                <li className="global_feed">
                    {props.curTag[0]}
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
                    <li className="global_feed" onClick = {()=> {props.curProfileTag[1](""); props.preProfileTag[1](props.preProfileTag[0]);}}>
                        My Articles
                    </li>
                    <li className="global_feed" onClick = {()=> {props.curProfileTag[1]("favorite"); props.preProfileTag[1]("");}}>
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