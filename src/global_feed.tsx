import './css/global_feed.css';

function GlobalFeed() {
    const userCheck = true;
    if (!userCheck) {
        return (
            <div className="global_feed">
                <li className="global_feed">
                    Global Feed
                    </li>
                <hr />
            </div>
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