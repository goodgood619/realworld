import { profile } from 'console';
import './css/global_feed.css';

function GlobalFeed(props : {curTag : [string,any],profile : [any,any]}) {
    const username = props.profile[0].username;
    if (username === undefined) {
        return (
            <>
            <div className="global_feed">
                <li className="global_feed" onClick = {()=> props.curTag[1]("")}>
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
                    <li className="global_feed">
                        My Articles
                    </li>
                    <li className="global_feed">
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