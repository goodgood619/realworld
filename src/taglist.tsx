import './css/taglist.css';

function TagList(props: {tagList:Array<any>,curTag : [string,any]}) {
    
    return (
        <div className="body_data_right">
            <div className="body_data_right_box">
                <div className="body_data_right_popular">
                    <p>Popular Tags</p>
                </div>
                <div>
                    {props.tagList.map((item)=>(
                        <a className = "body_data_right_tags" onClick = {() => props.curTag[1](item)}>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default TagList;