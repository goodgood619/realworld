import './css/taglist.css';

function TagList(props: {tagList:Array<any>, profile : any, curTag : [string,any],preTag : [string,any]}) {
    const profileUsername = props.profile.username;
    if(profileUsername === undefined) {
        return (
            <div className="body_data_right">
                <div className="body_data_right_box">
                    <div className="body_data_right_popular">
                        <p>Popular Tags</p>
                    </div>
                    <div>
                        {props.tagList.map((item : any,index : any)=>(
                            <a className = "body_data_right_tags" onClick = {() => {props.curTag[1](item); props.preTag[1](props.curTag[0]);}}>{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <>
            </>
        );
    }
}

export default TagList;